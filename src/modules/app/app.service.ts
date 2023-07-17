import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager' 

@Injectable()
export class AppService {  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  getHello(): string {
    
    return 'Hello World!';
  }


  async getIs(): Promise<any> {
    let d = await this.cacheManager.get('id1')
    console.log(d)
    return d
  }

  async setHello(): Promise<string> {
    await this.cacheManager.set('id1', "value")
    return 'ok!';
  }

}
