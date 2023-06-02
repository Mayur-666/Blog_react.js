import "./singlepost.css"
import imgs from "./b.jpg";

export default function Singlepost() {
  return (
    <div className='singlepost'>
      <div className="spwrapper">
        <img src={imgs} alt="postpic" className="spimg" />
        <h1 className="sptitle">
            Lorem ipsum dolor sit amet
            <div className="spedit">
                <i className="spicon fa-regular fa-pen-to-square"></i>
                <i className="spicon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="spinfo">
            <span className="spauthor">Author : <b>Mayur</b></span>
            <span className="spdate">1 hour ago</span>
        </div>

        <p className="spdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perferendis velit quaerat nihil vitae ut temporibus, 
            eaque alias architecto. Repellendus culpa eum aperiam 
            beatae, hic repellat id facere iste voluptates fuga, 
            atque voluptas possimus fugiat ex dolorum repudiandae nulla! 
            Ea suscipit molestias esse natus deleniti maxime. 
            Dolorum provident eos illo sint ipsum. 
            Possimus repudiandae quidem dolore inventore voluptate 
            nulla nemo dolor assumenda quae, enim voluptas quis 
            doloribus sunt praesentium ut reprehenderit fugiat esse 
            mollitia? Velit eveniet dolores optio ipsa vel cumque nam, 
            veniam facere libero? Animi, recusandae commodi. 
            Rerum quis, cumque ex asperiores molestias animi, 
            excepturi possimus quod corrupti aut deserunt ipsa 
            quasi beatae expedita. Veritatis nisi, facilis unde 
            nam ullam cupiditate quidem eveniet laboriosam eum. 
            Consequatur rerum quis obcaecati sit minus facilis enim, 
            animi quo autem vitae, beatae tempora dolores et unde. 
            Commodi rem repudiandae fugiat saepe sequi aliquid quaerat 
            accusantium dolorem ratione sapiente vitae totam architecto 
            officiis, nihil, necessitatibus sunt aut excepturi est dolorum 
            odio cupiditate fuga? Tenetur, natus. Praesentium exercitationem 
            illum doloribus at quas accusantium, voluptas autem odio maxime 
            cupiditate, ipsum iste debitis vitae tempora culpa. 
            Ipsa maiores unde deleniti aut libero atque repudiandae quis 
            dignissimos tempore reprehenderit maxime, aliquam voluptatibus 
            enim veritatis ea quasi voluptates consectetur vel!
        </p>
        
      </div>
    </div>
  )
}
