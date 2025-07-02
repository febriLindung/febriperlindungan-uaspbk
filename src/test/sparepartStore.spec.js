import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSparepartStore } from '@/stores/sparepartStore.js'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('Sparepart Store', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useSparepartStore()
  })

  it('fetches spareparts and sets state', async () => {
    const mockData = [
      { id: '1', name: 'Ban', harga: 50000 },
      { id: '2', name: 'Kampas Rem', harga: 30000 },
    ]

    axios.get.mockResolvedValue({ data: mockData })

    await store.getSparepart()

    expect(axios.get).toHaveBeenCalledWith('https://swanky-amusing-hockey.glitch.me/sparepart')
    expect(store.sparepart).toEqual(mockData)
  })

  it('adds a new sparepart with correct ID', async () => {
    const existingData = [
      { id: '1', name: 'Ban', harga: 50000 },
      { id: '2', name: 'Kampas Rem', harga: 30000 },
    ]

    const newInput = { name: 'Oli Mesin', harga: 60000 }
    const expectedNewData = { id: '3', ...newInput }

    axios.get.mockResolvedValue({ data: existingData })
    axios.post.mockResolvedValue({ data: expectedNewData })

    await store.addSparepart(newInput)

    expect(axios.get).toHaveBeenCalled()
    expect(axios.post).toHaveBeenCalledWith(
      'https://swanky-amusing-hockey.glitch.me/sparepart',
      expectedNewData
    )
    expect(store.sparepart).toContainEqual(expectedNewData)
  })

  it('handles empty initial data and sets ID to 1', async () => {
    const newInput = { name: 'Filter Udara', harga: 25000 }
    const expectedNewData = { id: '1', ...newInput }

    axios.get.mockResolvedValue({ data: [] })
    axios.post.mockResolvedValue({ data: expectedNewData })

    await store.addSparepart(newInput)

    expect(store.sparepart).toContainEqual(expectedNewData)
  })
})
