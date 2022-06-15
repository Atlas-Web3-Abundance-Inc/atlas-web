import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react'
// import { Form } from '../stories/Form/Form'
export default function Home() {
  // ** FORM CONTROLS */
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    phone:"", 
    company:"",
    address:"",
    email:"",
    twitterLink:"",
    linkedinLink:"",
    facebookLink:"",
    landlordAddress:"",
    landlordEmail:"",
    landlordPhone:""

  })

  const updateFormData = event=> {
    event.preventDefault()
    setFormData({
    ...formData, 
    [event.target.name] : event.target.value
  }) }

  // const {firstName, lastName, }

   // ** COMPONENTS */
  const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <button
        type={props.type}
        className="shadow bg-yellow-500 hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        // , ['storybook-button', `storybook-button--${size}`, mode].join(' ')
        style={backgroundColor && { backgroundColor }}
        {...props}
        // onClick={()=>{console.log('CLICK')}}
      >
        {label}
      </button>
    );
  };
  
  
  const Input = ({ primary, backgroundColor, size, label, type, ...props }) => {
    const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
    
    return (
      <div style={{display:"flex", flexDirection:"column", width:"50%", alignItems:"space-between", padding:"0 2% 0 0"}}>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
          {...props}
          type={type}
          placeholder={props.placeholder}
          onChange={
           e=> updateFormData(e)}

        />
        <label className="block text-gray-700 text-sm font-bold mb-2"> 
          {label}
        </label>  
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas</title>
        <meta name="description" content="The future of rent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className='text-yellow-500'>Atlas</span>
          {/* <a href="https://nextjs.org">At</a> */}
        </h1>

        <p className='font-semibold text-gray-300 px-50'> We're your new rental agent. You pay us and we pay your landlord, and you get sweet perks each month + when it's time to renew your lease and move! </p>
        <p className={styles.description}>
          Get started by filling out this  {' '}
          <code className={styles.code}>form</code>
        </p>

        <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      // className={['storybook-form', `storybook-form--${size}`, mode].join(' ')}
      // style={{display:"flex" }}
      onSubmit={()=>{console.log("submitting")}}
      // {...props}
    >
      <div style={{display:"flex",margin:"0 0 40px", }}>
        <Input
          label={"First Name"}
          
        />
        <Input
          label={"Last Name"}
        />
      </div>
      <div style={{display:"flex",margin:"0 0 40px", }}>
        <Input
          label={"Phone number"}
          type="tel"
        />
        <Input
          label={"Company"}
          
        />
      </div>
      <div>

      </div>      
      <div style={{margin:"0 0 40px", display:"flex"}}>
      <Input
          label={"Home address"}
      />
        <Input
          label={"Email"}
          type="email"
        />
        </div>
      <div style={{margin:"0 0 20px",display:"flex"}}>
        <Input
          placeholder={"https://twitter.com/_queenscript"}
          label={"Twitter Link"}
          type="text"
        />
        <Input
            placeholder={"https://linkedin.com/in/queenshabazz"}
            label={"LinkedIn"}
            type="text"
        />
        <Input
            placeholder={"https://www.facebook.com/QueenShabazz/"}
            label={"Facebook"}
            type="text"
        />
      </div>
      <div style={{margin:"0 0 20px",display:"flex"}}>
        <Input
          placeholder={"111 San Jose"}
          label={"Landlord Address"}
          type="text"
        />
        <Input
            placeholder={"landlord@email.coma"}
            label={"Landlord Email"}
            type="text"
        />
        <Input
            placeholder={"(555)555-5555"}
            label={"Landlord Phone"}
            type="text"
        />
      </div>    
      <Button
        type="submit"
        label={"Submit"}
      />
    </form>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
