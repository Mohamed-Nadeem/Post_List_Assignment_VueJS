import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import nock from 'nock'
import httpAdapter from 'axios/lib/adapters/http'
import TemperMain from '@/components/temperMain.vue'
import home from '@/views/Home.vue'

describe('temperMain.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TemperMain, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Home.vue View', () => {
  it('has a created hook', () => {
    expect(typeof home.created).toBe('function')
  })
  it('sets the correct default data', () => {
    expect(typeof home.data).toBe('function')
    const defaultData = home.data()
    expect(defaultData.isLoaded).toBe(true)
  })
})

axios.defaults.adapter = httpAdapter

describe('getPosts.js', () => {
  it('get data from service', () => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/posts')
      .reply(200, {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      })
  })
})
