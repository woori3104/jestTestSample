import { fetchData } from '../src/fetchData'
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('fetchesdata  function tests', () => {
  it('fetches data from an API', async () => {
    const data = { name: 'John Doe' };
    mockedAxios.get.mockResolvedValue({ data });
  
    const result = await fetchData('https://example.com/api');
  
    expect(result).toEqual(data);
  });
  
  it('fetches data from an API', async () => {
   // const data = { name: 'John Doe' };
    mockedAxios.get.mockRejectedValue(new Error('fetchData Error'));
  
    try {
      await fetchData('https://example.com/api');
    } catch (error) {
      // Expect an error to be thrown
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain('fetchData Error');
    }
  });
});


