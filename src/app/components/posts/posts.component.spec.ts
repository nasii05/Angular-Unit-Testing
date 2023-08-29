import { Post } from "src/app/models/Post";
import { PostsComponent } from "./posts.component";
import { of } from "rxjs";

describe('Posts Component', ()=>{
    let POSTS: Post[];
    let component: PostsComponent;
    let mockPostService:any;

    beforeEach(()=>{
        POSTS = [
        {
            id:1,
            body:'body 1',
            title: 'title 1'
        },
        {
            id: 2,
            body: 'body 2',
            title: 'title 2'
        },
        {
            id: 3,
            body: 'body 3',
            title: 'title 3'
        },
        ];
        mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
        component = new PostsComponent(mockPostService);
    });

    describe('delete', ()=>{
      it('should delete the selected Post form the posts', ()=>{
        mockPostService.deletePost.and.returnValue(of(true));
        component.posts = POSTS; 
        component.delete(POSTS[1]);
        expect(component.posts.length).toBe(2);
      });
      it('should delete the actual selected Post in Posts', ()=>{
        mockPostService.deletePost.and.returnValue(of(true));
        component.posts = POSTS;
        component.delete(POSTS[1]);

        for(let post of component.posts){
            expect(post).not.toEqual(POSTS[1]);
        }
      })

      it('should call the delete method in Post Service only once', ()=>{
        mockPostService.deletePost.and.returnValue(of(true));
        component.posts = POSTS; 
        component.delete(POSTS[1]);
        expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
      });
    })
})