import { minus } from "../src/minus"

import * as sumModule from '../src/sum';
describe('fetchesdata  function tests', () => {
  it('minus function calls sum and subtracts correctly', () => {
    // sum 함수에 대한 스파이 생성
    const sumSpy = jest.spyOn(sumModule, 'sum').mockImplementation((a, b) => a + b);

    // 테스트 실행
    expect(minus(5, 2, 3)).toBe(4);

    // sum 함수가 올바르게 호출되었는지 확인
    expect(sumSpy).toHaveBeenCalledWith(5, 2);

    // 스파이 제거
    sumSpy.mockRestore();
  });
  it('minus function calls sum and subtracts correctly', () => {
    // sum 함수에 대한 스파이 생성
    const sumSpy = jest.spyOn(sumModule, 'sum').mockReturnValue(10);

    // 테스트 실행
    expect(minus(5, 2, 3)).toBe(7);

    // sum 함수가 올바르게 호출되었는지 확인
    expect(sumSpy).toHaveBeenCalledWith(5, 2);

    // 스파이 제거
    sumSpy.mockRestore();
  });
})