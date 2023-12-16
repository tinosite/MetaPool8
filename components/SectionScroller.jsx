import { UseScrollPosition } from '@n8tb1t/use-scroll-position'
import React, { UseRef } from "react";

function sectionPositionHook(
    boundingRef,
    sectionRef,
    sectionIndex,
    setSection
){
    UseScrollPosition(
        ({prevPos, currPos }) => { //position is top left of the element
            //this logic fires after a scroll event and invokes the prevPos
            //and currPos provided by n8tb1t's hook
            
            //THIS variable represents when we want to change the section
            //I have it set to half the Scroller component height relative
            // to the viewport.
            let triggerHeight = -(boundingRef?.current.clientHeight/2);
            
            let isTriggeredGoingDown = 
              (prevPos.y < triggerHeight) &&  (triggerHeight < currPos.y);
            let isTriggeredGoingUp = 
              (currPos.y < triggerHeight) &&  (triggerHeight < prevPos.y);
            
            //If the top left of the section passes the midway point while
            //scrolling down, we set the section to the current section index.
            //If it's triggered going up, we set it to previous section index
            console.log(isTriggeredGoingDown)
            if(isTriggeredGoingDown){
                setSection(sectionIndex);
            } else if(isTriggeredGoingUp){
                setSection(sectionIndex - 1);
            }
        },
        [],
        sectionRef, //the element we are tracking
        false, //if we are using the window to track (which we're not)
        150, //throttling of the hook (in ms), to consume less resources
        boundingRef //the Scroller parent element
    );
};


export default function SectionScroller({
  children, //HERE we need to tell React explicitly that we want the child components
  setSection //this is the mutator method we set earlier
})
{
  const scrollerEle = UseRef(null);

  function renderChildren(){ //THIS function we will use to take over the 
                              //rendering of the child components
      let sectionIndex = 0;
      return React.Children.map(children, child => { //for each child component...
          const sectionRef = UseRef(); // create a ref to this section

          let args = { //THESE args pass in refs nessecary for tracking of the section
              boundingRef: scrollerEle,
              sectionRef: sectionRef,
              sectionIndex: sectionIndex,
              setSection: setSection
          };
          sectionPositionHook(args); //CREATE a position hook that uses the
                                    // args we wrote above to track
                                    // this section. We will write this later
          sectionIndex += 1;
          console.log(sectionIndex)
          return(
              <div ref={sectionRef} key={sectionIndex - 1}>
                  {child}
              </div>
          );
      });
  }

  return(
      <div ref={scrollerEle}>
          {renderChildren()}
      </div>
  );
}