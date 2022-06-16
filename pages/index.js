import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
// import { Form } from '../stories/Form/Form'
export default function Home() {
  // ** FORM CONTROLS */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    address: "",
    email: "",
    twitterLink: "",
    linkedinLink: "",
    facebookLink: "",
    landlordAddress: "",
    landlordEmail: "",
    landlordPhone: ""

  })



  let {
    firstName,
    lastName,
    phone,
    company,
    address,
    email,
    twitterLink,
    linkedinLink,
    facebookLink,
    landlordAddress,
    landlordEmail,
    landlordPhone } = formData

  let changed

  React.useEffect(() => {
    changed = formData
  }, [formData])
  const updateFormData = event => {
    // event.preventDefault()

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

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
      <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
          type={type}
          placeholder={props.placeholder}
          onChange={
            e => {
              e.preventDefault()
              props.updateFormData(e);
            }
            // e=> {
            // props.updateFormData(e);
            // }
          }
          value={formData[props?.name]}
          name={props.name}
          key={props.name}
          autoFocus
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.name}>
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
          Welcome to <span className="text-yellow-500">Atlas</span>
          {/* <a href="https://nextjs.org">At</a> */}
        </h1>

        <p className="font-bold text-gray-200 py-60 px-60" style={{ padding: "60px 60px 0" }}> We&apos;re your new rental agent. You pay us and we pay your landlord, and you get sweet perks each month + when it&apos;s time to renew your lease and move! </p>
        <p className={styles.description}>
          Get started by filling out this  {' '}
          <code className={styles.code}>form</code>
        </p>

        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          // className={['storybook-form', `storybook-form--${size}`, mode].join(' ')}
          // style={{display:"flex" }}
          onSubmit={() => { console.log("submitting") }}
        // {...props}
        >
          <div style={{ display: "flex", margin: "0 0 40px", }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={firstName}
                onChange={e => updateFormData(e)}
                placeholder="First name"
                type="text"
                name="firstName"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={firstName}>
                {"First Name"}
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={lastName}
                onChange={e => updateFormData(e)}
                placeholder="Last name"
                type="text"
                name="lastName"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={lastName}>
                {"Last Name"}
              </label>
            </div>
            {/* <Input
          label={"First Name"}
          name="firstName"
          value={firstName}
          updateFormData={updateFormData}
        /> */}
            {/* <Input
          label={"Last Name"}
          name="lastName"
          value={lastName}
          updateFormData={updateFormData}
        /> */}
          </div>
          <div style={{ display: "flex", margin: "0 0 40px", }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={phone}
                onChange={e => updateFormData(e)}
                placeholder="555-555-5555"
                type="text"
                name="phone"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={phone}>
                {"Phone"}
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={company}
                onChange={e => updateFormData(e)}
                placeholder="Company"
                type="text"
                name="company"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={company}>
                {"Company"}
              </label>
            </div>
            {/* <Input
              label={"Phone number"}
              type="tel"
              name="phone"
              value={phone}
              updateFormData={updateFormData}
            />
            <Input
              label={"Company"}
              name="company"
              value={company}
              updateFormData={updateFormData}
            /> */}
          </div>
          <div>

          </div>
          <div style={{ margin: "0 0 40px", display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={address}
                onChange={e => updateFormData(e)}
                placeholder="111 San Jose"
                type="text"
                name="address"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={address}>
                {"Address"}
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={email}
                onChange={e => updateFormData(e)}
                placeholder="email@me.com"
                type="text"
                name="email"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={email}>
                {"Email"}
              </label>
            </div>
            {/* <Input
              label={"Home address"}
              type="text"
              name="address"
              value={address}
              updateFormData={updateFormData}
            />
            <Input
              label={"Email"}
              type="email"
              name="email"
              value={email}
              updateFormData={updateFormData}
            /> */}
          </div>
          <div style={{ margin: "0 0 20px", display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={twitterLink}
                onChange={e => updateFormData(e)}
                placeholder="https://twitter.com/_queenscript"
                type="text"
                name="twitterLink"
                
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={twitterLink}>
                {"Twitter"}
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={linkedinLink}
                onChange={e => updateFormData(e)}
                placeholder="https://linkedin.com/in/queenshabazz"
                type="text"
                name="linkedinLink"
                
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={linkedinLink}>
                {"LinkedIn"}
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={facebookLink}
                onChange={e => updateFormData(e)}
                placeholder="https://www.facebook.com/QueenShabazz/"
                type="text"
                name="facebookLink"
                
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={facebookLink}>
                {"Facebook"}
              </label>
            </div>
            {/* <Input
              placeholder={"https://twitter.com/_queenscript"}
              label={"Twitter Link"}
              type="text"
              name="twitterLink"
              value={twitterLink}
              updateFormData={updateFormData}
            />
            <Input
              placeholder={"https://linkedin.com/in/queenshabazz"}
              label={"LinkedIn"}
              type="text"
              name="linkedinLink"
              value={linkedinLink}
              updateFormData={updateFormData}
            />
            <Input
              placeholder={"https://www.facebook.com/QueenShabazz/"}
              label={"Facebook"}
              type="text"
              name="facebookLink"
              value={facebookLink}
              updateFormData={updateFormData}
            /> */}
          </div>
          <div style={{ margin: "0 0 20px", display: "flex" }}>
            {/* <Input
              placeholder={"111 San Jose"}
              label={"Landlord Address"}
              type="text"
              name="landlordAddress"
              value={landlordAddress}
              updateFormData={updateFormData}
            />
            <Input
              placeholder={"landlord@email.coma"}
              label={"Landlord Email"}
              type="email"
              name="landlordEmail"
              value={landlordEmail}
              updateFormData={updateFormData}
            />
            <Input
              placeholder={"(555)555-5555"}
              label={"Landlord Phone"}
              type="tel"
              name="landlordPhone"
              value={landlordPhone}
              updateFormData={updateFormData}
            /> */}
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={landlordAddress}
                onChange={e => updateFormData(e)}
                placeholder="111 San Jose"
                type="text"
                name="landlordAddress"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={address}>
                {"Landlord Address"}
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={landlordEmail}
                onChange={e => updateFormData(e)}
                placeholder="landlord@email.com"
                type="text"
                name="landlordEmail"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={landlordEmail}>
                {"Landlord Email"}
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={landlordPhone}
                onChange={e => updateFormData(e)}
                placeholder="555-555-5555"
                type="text"
                name="landlordPhone"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={landlordPhone}>
                {"Landlord Phone"}
              </label>
            </div>
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
