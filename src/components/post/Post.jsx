import "./post.css";
import imgz from "./b.jpg"

export default function Post() {
  return (
    <div className="post">
      <img src={imgz} alt="" className="postimg" />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="posttitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="posttime">1 hour ago</span>
      </div>
      <p className="postdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Mollitia animi facilis esse at beatae consequuntur perferendis 
        veniam doloremque commodi. Repudiandae, aspernatur nostrum 
        dolorem necessitatibus minus ipsa neque fuga rerum labore 
        praesentium a eveniet ea accusamus. Veniam explicabo ea 
        sed, eum, ratione dignissimos dolores minus necessitatibus 
        adipisci provident ipsa nihil quibusdam neque voluptas nam eos. 
        Esse commodi impedit optio vero id, odit alias totam explicabo 
        vel ratione quae praesentium animi repudiandae sapiente 
        est modi! Qui ipsa nesciunt a pariatur odio incidunt 
        deleniti perspiciatis. Error dolorem, temporibus aliquam 
        tempora eius distinctio quos aut eaque, dicta adipisci 
        provident quia necessitatibus autem, modi natus.</p>
    </div>
  )
}
