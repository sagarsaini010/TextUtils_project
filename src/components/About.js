// import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] =
    // useState( {
    //     color:"black",
    //     backgroundColor: "white"
    // })
    let myStyle ={
        color: props.mode === "dark"?'white':'black',
        backgroundColor : props.mode ==='dark'?'#042743':'white'
    }
   
  return (
    <>
    <div className="container" style={myStyle}>
                            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">

            {/* </div> */}
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <strong> 📊 Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
              
Unleash the power of words with our Analyze Your Text tool! This section helps you dive deep into your writing to uncover valuable insights—whether you're crafting an email, a blog, or studying for school.
<br />🔍 What it does: <br />
- Counts words, characters, and sentences <br />
- Detects reading time and readability <br />
- Highlights key patterns in your text <br />
Perfect for writers, students, and anyone who wants to understand and improve their written content. Simple, fast, and intuitive—your go-to feature for text analysis!

            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 <strong>🆓 Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
               TextUtil is completely free to use—no subscriptions, no hidden fees, and no strings attached. Whether you're a student polishing essays, a professional refining reports, or just someone who loves clean writing, we've got your back.
<br />🎉 What that means for you: <br />
- Full access to all features without cost <br />
- No sign-up required <br />
- Enjoy hassle-free tools, whenever you need them <br />
We believe great utilities should be accessible to everyone. Just open, type, and get productive—without worrying about the price tag.

            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>🌐 Browser Compatible</strong>  
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                Use TextUtil effortlessly—right from your favorite browser! No downloads, installations, or device restrictions. Whether you're on a desktop, laptop, or tablet, our app runs smoothly across modern browsers.
<br />💡 What makes it easy: <br />
- Works seamlessly on Chrome, Firefox, Edge, Safari, and more <br />
- Mobile-friendly design for on-the-go access <br />
- Instant startup—just open the site and you're ready to go <br />
TextUtil fits your workflow, wherever you are. Just connect to the internet, and let the words flow. <br />

Want a techier or more minimalist version? I’d be happy to tweak it!

            </div>
            </div>
        </div>
            </div>
             </div>
            </>
        )
        
    }