import {createStore} from "@stencil/store";

const {state} = createStore({
  title: 'Copywriting',
  meta:{
    title:"Copywriting",
    description:"Freelance Writer, Editor, & Communications Consultant",
    keywords:"Writer | Communications Consultant | Editor"
  },
  quote:
    'I help clients to communicate in engaging, effective, and persuasive language that speaks to their target audience. Below are a few recent projects:',
  content: [
    {
      title: 'Austrade',
      description: '<h5>The Australian Trade Commission</h5>',
      images: ['/assets/images/copy/austrade-1.png', '/assets/images/copy/austrade-2.png'],
    },
    {
      title: 'Oxfam in Vietnam',
      description: '<h5>Oxfam in Vietnam</h5>',
      images: ['/assets/images/copy/oxfam.png'],
    },
    {
      title: 'EuroCham',
      description: '<h5>The European Chamber of Commerce in Vietnam</h5>',
      images: ['/assets/images/copy/eurocham-1.png', '/assets/images/copy/eurocham-2.png'],
    },
    {
      title: 'Audier & Partners Law Firm',
      description: '<h5>Audier & Partners Law Firm</h5>',
      images: ['/assets/images/copy/ap.png'],
    },
  ],
});

export default state;