import {createStore} from "@stencil/store";

const {state} = createStore({
  title: 'Content Editing',
  meta:{
    title:"Content Editing",
    description:"Freelance Writer, Editor, & Communications Consultant",
    keywords:"Writer | Communications Consultant | Editor"
  },
  quote:
    'I help clients to produce pitch-perfect print publications and high-impact digital media content. Below are a few recent projects:',
  content: [
    {
      title: 'EuroCham',
      description: '<h5>The European Chamber of Commerce in Vietnam</h5>',
      images: ['/assets/images/content/eurocham-1.png', '/assets/images/content/eurocham-3.png'],
    },
    {
      title: 'Saigon-Hanoi Securities',
      description: '<h5>Saigon-Hanoi Securities</h5>',
      images: ['/assets/images/content/shs-1.png', '/assets/images/content/shs-2.png'],
    },
  ],
});

export default state;