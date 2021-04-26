import { Action, getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import {Article} from '../model';
import * as api from '@/store/api';
type FeedType = 'global' | 'user';


@Module({
    dynamic : true,
    namespaced: true,
    name: 'articles',
    store,
})
class ArticlesModule extends VuexModule {
    public feed: Article[] = [];

    @MutationAction
    public async refreshFeed(feedType: FeedType) {
      const globalFeed = await api.getGlobalFeed();
      return {
        feed: globalFeed.articles,
      };
    }
  }

export default getModule(ArticlesModule);
