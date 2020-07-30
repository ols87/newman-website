import {createStore} from "@stencil/store";

const {state} =createStore({
  title: 'About Me',
  meta:{
    title:"About",
    description:"Freelance Writer, Editor, & Communications Consultant",
    keywords:"Writer | Communications Consultant | Editor"
  },
  avatar: '/assets/images/laurence.png',
  quote:
    'I am a freelance copywriter, editor, and communications consultant. Now based in Vietnam, I relocated from London in 2016 after almost a decade in media relations and public affairs roles.',
  content: [
    {
      description:
        '<p>Since moving to Asia I have delivered projects for clients in Australia, Hong Kong, Singapore, France, the United States, Thailand, Vietnam, and the UK. I have worked with chambers of commerce, digital marketing agencies, international universities, government embassies, market research consultancies, law firms, financial publishers, stock brokerages, start-ups, charities and non-profits.</p><p>Before leaving the UK, I held a senior communications position at a national medical regulator, managing high-profile press investigations and nationwide media campaigns. I briefed journalists on breaking news stories, prepared the Chief Executive for interviews, drafted press releases and media statements, and acted as a spokesperson.</p><p>I also worked in the public affairs team of the UK’s most influential health think-tank, as a press officer for one of Britain’s largest political parties, and as an aide to two Members of Parliament.</p>',
      images: [
        '/assets/images/about/about-1.png',
        '/assets/images/about/about-2.png',
        '/assets/images/about/about-3.png',
        '/assets/images/about/about-4.png',
      ],
    },
  ],
})

export default state;
