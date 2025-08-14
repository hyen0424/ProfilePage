import { siteText } from '../contents/textdata';

function Site(){
  return(
    <section id="site">
      <div className="site_inner">
        <h2 className="site_title">
          Web Page Coding <em>my work's</em>
        </h2>
        <div className="site_wrap">
          {
            siteText.map((site,index)=>(
              <article className={`site_item s${index+1}`} key={index}>
                <span className="num">{ index+1 }</span>
                <div className="text">
                  <div>{ site.text[0] }</div>
                  <div>{ site.text[1] }</div>
                  <div>{ site.text[2] }</div>
                </div>
                <h3 className="title">{ site.title }</h3>
                <div className="btn">
                  <a href={site.code}> Code View </a>
                  <a href={site.view}> Site View </a>
                </div>
                <div className="info">
                  <span> { site.info[0] } </span>
                  <span> { site.info[1] } </span>
                  <span> { site.info[2] } </span>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Site;