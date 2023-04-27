import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {followUserAction} from "@sharedModules/follow/store/actions/followUser.action";

@Component({
  selector: 'ac-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent {
  @Input() slug: string;
  @Input('isFollowing') isFollowingProp: boolean;

  isFollowing: boolean;

  constructor(private store: Store) {}

  get bntClass(): string {
    if (this.isFollowing) {
      return 'text-red-500 border-red-500';
    }

    return 'text-green-500 border-green-500';
  }

  ngOnInit(): void {
    this.isFollowing = this.isFollowingProp;
  }

  handleFollow(): void {
    this.store.dispatch(
      followUserAction({
        slug: this.slug,
        isFollowing: this.isFollowing,
      }),
    );


    this.isFollowing = !this.isFollowing;
  }
}
