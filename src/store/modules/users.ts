import {VuexModule, Module, getModule, MutationAction, Mutation, Action} from 'vuex-module-decorators';
import { Profile, User, UserForUpdate, UserSubmit } from '../model';
import store from '@/store';
import { fetchProfile, fetchUser, loginUser, setJWT, updateUser } from '../api';


@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true,
    },
)
export class UsersModule extends VuexModule {
    public user: User|null = null;
    public profile: Profile| null = null;

    get username() {
        return this.user && this.user.username || null;
    }

/*
@Mutation public setUser(user: User) {
        this.user = user;
    }
 @Mutation public setProfile(profile: Profile) {
        this.profile = profile;
    }
    @Action({commit: 'setUser'})
    public async login(userSubmit: UserSubmit) {
        try {
            const user = await loginUser(userSubmit);
            return user;
        } catch (e) {
            // tslint:disable-next-line: no-console
            console.error(e);
            throw new Error('Invalid username or password');
        }
    }
    */
    @MutationAction
    public async login(userSubmit: UserSubmit) {
      const user = await loginUser(userSubmit);
      setJWT(user!.token);
      return { user };
    }

    @MutationAction
    public async loadProfile(username: string) {
      const profile = await fetchProfile(username);
      return { profile };
    }


    @MutationAction
    public async loadUser() {
      const user = await fetchUser();
      return { user };
    }
    @MutationAction
  public async updateSelfProfile(userUpdateFields: UserForUpdate) {
    const user = await updateUser(userUpdateFields);
    return { user };
  }

}

export default getModule(UsersModule);
