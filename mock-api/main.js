const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/getUnmarkedArticles', (req, res) => {
  // const articles = new Array(100).fill(0).map((_, index) => {
  //   return index % 2 === 0 ? {
  //     id: index,
  //     metadata: 'Today · 5 minute read',
  //     image: 'https://placebear.com/250/250',
  //     title: 'China’s digital currency: A small leap forward',
  //   } : {
  //     id: index,
  //     metadata: 'Today · 5 minute read',
  //     image: 'https://placebear.com/250/251',
  //     title: 'Top Trumps: Private banking and the US election',
  //   };
  // });

  // res.json(articles);
  res.json([{"Id":"http://content.emii.com/documents/b1m08wd5110v7m","Title":"[\r\n  \"IT infrastructure makes democratising data challenging says 80% of decision-makers\"\r\n]","ImageUrl":"[\r\n  \"/Media/images/telecoms/2020/02/1280px-View_of_Nuremberg_from_the_Nuremberg_Castle._Germany.jpg\"\r\n]","Metadata":null,"ArticleBody":"[\r\n  \"\\n<hr class=\\\"wp-block-separator\\\">\\n\\n\\n\\n<p><strong>New research has found that 68% of data teams are unable to extract the data insights needed by their organisations’ decision-makers.</strong></p>\\n\\n\\n\\n<p>The report also found that 80% of decision-makers say their current IT infrastructure makes it challenging to democratise data, according to analytics database company Exasol, which limits their ability to extract value from insights.</p>\\n\\n\\n\\n<p>Of the 2,000 data strategy decision-makers surveyed, 96% of respondents believe a cloud model can make it easier to democratise data in an organisation, while 73% state that migrating some or all data workloads to the cloud had a positive impact on what they can do with their data. </p>\\n\\n\\n\\n<p>In addition, 51% report that the cloud has improved ease of\\naccess and shareability of data, and 46% cite faster query response times.</p>\\n\\n\\n\\n<p>“Many businesses are only scratching the surface of what’s\\npossible with their data,” said Mathias Golombek, CTO at Exasol.</p>\\n\\n\\n\\n<p>“Any organisation with an infrastructure that slows down data access for its teams has a fundamental problem. Four out of five decision-makers in our study have reported performance issues. This is unacceptable.</p>\\n\\n\\n\\n<hr class=\\\"wp-block-separator\\\">\\n\\n\\n\\n<p><strong>Newsletter</strong></p>\\n\\n\\n\\n<p>Time is precious, but news has no time. Sign up today to receive daily free updates in your email box from the Data Economy Newsroom.</p>\\n\\n\\n\\n<figure class=\\\"wp-block-image\\\"><a href=\\\"https://data-economy.com/subscribe/\\\" target=\\\"_blank\\\" rel=\\\"noreferrer noopener\\\"><img src=\\\"/media/telecoms/2019/06/subscribe-button-1.jpg\\\" alt=\\\"\\\" class=\\\"wp-image-141798\\\"></a></figure>\\n\\n\\n\\n<hr class=\\\"wp-block-separator\\\">\\n\\n\\n\\n<p>“You can’t be a data-driven business if your teams can’t\\nwork with the data, or if it takes them too long to find what they need.”</p>\\n\\n\\n\\n<p>The survey further revealed that decision-makers perceive a lack of data strategy understanding at the senior management level (40%) and widespread (52%) resistance to the adoption of data-driven methods. </p>\\n\\n\\n\\n<p>“Putting data strategy first is essential to making sure\\nthat businesses can move at a speed they want to, rather than a speed they are\\nforced to by an infrastructure decision,” added Golombek.</p>\\n\\n\\n\\n<p>“That’s why the choice of deployment model must come after\\nestablishing a clear data strategy and an effective data culture.</p>\\n\\n\\n\\n<p>“How your people feel about working with data is a big part of the equation. Limitations can cause frustration and prevent your teams from becoming truly data-driven.”</p>\\n\\n\\n\\n<p><strong>Read the latest from the Data Economy Newsroom:</strong></p>\\n\\n\\n\"\r\n]"}]);
});

app.get('/api/getSavedArticles', (req, res) => {
  const articles = new Array(100).fill(0).map((_, index) => {
    return index % 2 === 0 ? {
      id: index,
      metadata: 'Today · 5 minute read',
      image: 'https://placebear.com/250/250',
      title: 'China’s digital currency: A small leap forward',
    } : {
      id: index,
      metadata: 'Today · 5 minute read',
      image: 'https://placebear.com/250/251',
      title: 'Top Trumps: Private banking and the US election',
    };
  });

  res.json(articles);
});

app.put('/api/deleteArticle', (req, res) => {
  res.json({});
});

app.put('/api/saveArticle', (req, res) => {
  res.json({});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
