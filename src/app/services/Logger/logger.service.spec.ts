import { LoggerService } from "./logger.service"

describe('LoggerService', () => {
  let service: LoggerService;
  beforeEach(()=>{
    service = new LoggerService;
  });
  it('should not have any messages at starting', () => {
    // arrange 
    // const service = new LoggerService();
    // act
    let count = service.mesages.length;
    // assert
    expect(count).toBe(0);
  });

  it('should add the message when log is called', () => {
    // arrange
    // const service = new LoggerService();
    // act
    service.log('message');
    // assert
    expect(service.mesages.length).toBe(1);
  });

  it('should clear all the messages when clear is called', () => {
    // arrange
    // const service = new LoggerService();
    service.log('message');
    // act
    service.clear();
    // assert
    expect(service.mesages.length).toBe(0);
  })
})