import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NppKSwKrZFXZY2IIqNkrovBsEM2vXaS5BxO_YKC4EYQ'
    }
})