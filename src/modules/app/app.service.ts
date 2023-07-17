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


  async getIs(id: string): Promise<any> {
    let d = await this.cacheManager.get(id)
    console.log(d)
    return d
  }

  async setHello(id: string, value: string): Promise<string> {
    await this.cacheManager.set(id, value)
    return 'ok!';
  }

}
