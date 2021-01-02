# Using XState with React Example
The purpose of this repository is to show a react implementation of xState. xState uses the concept of a Finite State Machine to declaratively write states for an application.


## How to get started
1. Clone this repo and run `npm install`
2. Run `npm run start`. This is made via Create-React-App so everything should be ready to go
3. There are 3 examples, click each nav link to see the example

### Recommendations for learning:
• Machine states are defined in the files located in: `/src/machine`    
• Most basic example is `toggleMachine`, where it just has 2 possible states    
• `dataMachine` is an example that deals with multiple states and side effects to invoke when it transitions to another state (eg. `states.loading.invoke` or has reached that state `states.on.DONE_MORE.actions`    
• `videoMachine` is an example of multiple nested states. It also shows definition of side effects that are written not in the xstate machine, but outside in a react component (or hook). Look at `playVideo`, `pauseVideo`, `resetVideo`, and `restartVideo` for examples    