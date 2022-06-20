import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import {gql, useQuery, useMutation,client,ApolloProvider,ApolloClient,
  InMemoryCache,} from "@apollo/client"
import {Mutation} from '../db/resolvers'

// const client = new ApolloClient({
//   uri: '/api/graphql',
//   cache: new InMemoryCache()
// });
// Define mutation
const CREATE_USER = gql`
  # Increments a back-end counter and gets its resulting value
  mutation NewUser(
    $UserInput: UserInput
      ) {
  newUser(
  user: $UserInput) 
  {
  firstName
  lastName
  phone 
  company
  address
  email 
  twitterLink
  linkedinLink 
  facebookLink 
  landlordAddress
  landlordEmail
  landlordPhone 
  }
}
`
// import { Form } from '../stories/Form/Form'
export default function Home() {
  // ** FORM CONTROLS */
  // Pass mutation to useMutation
  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER);
  const {newUser} = Mutation
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
        style={backgroundColor && { backgroundColor }}
        {...props}
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
          onSubmit={ 
            async (e) => {
            e.preventDefault();
            mutateFunction({variables:{"UserInput":formData}}) 
            setFormData({
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

          }}
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

          </div>
          <div style={{ margin: "0 0 20px", display: "flex" }}>
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
