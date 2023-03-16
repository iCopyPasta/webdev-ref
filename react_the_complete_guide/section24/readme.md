# Animating React Apps and Components

- Adding Smooth Animations to our Apps

## Module Content

- CSS Animations & Why They Are Sometimes Not Enough
- Animating React Components With Extra Libraries

When working with animations:

- (No React) CSS Transitions and Animations
  - Transitions
    - transition key
    - performance friendly
    - display block/none prevents using transition key
  - Animation - more fine grained control, step of steps \* whenever an
    Transition, auto figure out animation

```css
transition: all 300ms ease-out;
```

Animation

- uses keyframes to define points of the transition
- must also use a timing in the higher-level usage for the class

```css
@keyframes openModal {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  50% {
    opacity: 1;
    transform: translateY(20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

```css
.ModalClosed {
  animation: closeModal 0.4s ease-out forwards;
}
```

### CSS Transition & Animations Limitations

- div elements are always present, but they're not visible
- This populates DOMs needlessly, not "React-ish"
- For things like Side-Drawer, it's okay
- Timing on animations may not play with React render cycles

  - On removal, ReactJS wouldn't be aware of animations on CSS and removes it directly

  ### React Transition Group

  - third party package that is well-supported
  - uses four main state, and you can control timeout in the transition _between_ states
    - entering
    - entered
    - exiting
    - exited
```javascript
<Transition 
  in={this.state.showBlock}
  timeout={1000}
  mountOnEnter
  unmountOnExit
  onEnter={() => console.log('onEnter')}
  onEntering={() => console.log('onEntering')}
  onEntered={() => console.log('onEntered')}
  onExit={() => console.log('onExit')}
  onExiting={() => console.log('onExiting')}
  onExited={() => console.log('onExited')}>
  {(state) => (
    <div
      style={{
        backgroundColor: "red",
        width: 100,
        height: 100,
        margin: "auto",
        transition: "opacity 1s ease-out",
        opacity: state === "exiting" ? 0 : 1
      }}
    ></div>
  )}
</Transition>
```
Note: 
* can also nest in any component you want
* want to sync timings in the CSS animations and timeout in Transition
  * can define unique enter/exit timings with object structure
* can listen for varying states on the callbacks that are provided
  * can create staggered animations

### The CSSTransition Component
* pre-defined CSS classes for animation states
* 
