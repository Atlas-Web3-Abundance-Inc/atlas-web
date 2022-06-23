import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import {
  gql, useQuery, useMutation, client, ApolloProvider, ApolloClient,
  InMemoryCache,
} from "@apollo/client"
import { Mutation } from '../db/resolvers'

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
  addressCity
  addressState
  addressZip
  email 
  twitterLink
  linkedinLink 
  facebookLink 
  landlordAddress
  landlordCity
  landlordState
  landlordZip
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
  const { newUser } = Mutation
  const [isHidden, setIsHidden] = useState(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    address: "",
    addressCity: "",
    addressState: "",
    addressZip: "",
    email: "",
    twitterLink: "",
    linkedinLink: "",
    facebookLink: "",
    landlordAddress: "",
    landlordCity: "",
    landlordState: "",
    landlordZip: "",
    landlordEmail: "",
    landlordPhone: ""

  })

  let {
    firstName,
    lastName,
    phone,
    company,
    address,
    addressCity,
    addressState,
    addressZip,
    email,
    twitterLink,
    linkedinLink,
    facebookLink,
    landlordAddress,
    landlordCity,
    landlordState,
    landlordZip,
    landlordEmail,
    landlordPhone } = formData


  const updateFormData = event => {
    // event.preventDefault()

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


  // ** COMPONENTS */

  const Modal = function (props) {
    return (
      props.visible ?
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">

              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="success-animation">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                  <div className="bg-gray-50 p-5 sm:px-6 sm:flex sm:flex-row-reverse" style={{ margin: "20% 0" }}>
                    We&apos;ve received your entry and will be in touch with you soon!
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div> : props.visible === false ?
          <div>
            <h1> Something went wrong :( </h1>
          </div> :
          <></>)
  }

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
        <Modal
          visible={isHidden}
        />
        {!isHidden
          &&
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={
              async (e) => {
                e.preventDefault();
                mutateFunction({ variables: { "UserInput": formData } }).then(
                  setIsHidden(true)
                ).catch(e => {
                  setIsHidden(false)
                  console.log(e)
                })
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
            <div style={{ margin: "0 0 20px", display: "flex" }}>
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
                  {"Street Address"}
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                  value={addressCity}
                  onChange={e => updateFormData(e)}
                  placeholder="San Jose"
                  type="text"
                  name="addressCity"
                  required
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={addressCity}>
                  {"City"}
                </label>
              </div>
            </div>
            <div style={{ margin: "0 0 20px", display: "flex" }}>
  
              <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                  value={addressState}
                  onChange={e => updateFormData(e)}
                  placeholder="California"
                  type="text"
                  name="addressState"
                  required
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={addressState}>
                  {"State"}
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                value={addressZip}
                onChange={e => updateFormData(e)}
                placeholder="94612"
                type="number"
                name="addressZip"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={addressZip}>
                {"Zip Code"}
              </label>
            </div>
            </div>

            <div style={{ margin: "0 0 40px", display: "flex" }}>
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
                  value={landlordCity}
                  onChange={e => updateFormData(e)}
                  placeholder="New York City"
                  type="text"
                  name="landlordCity"
                  required
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={landlordCity}>
                  {"Landlord City"}
                </label>
              </div>

            </div>
            <div style={{ margin: "0 0 20px", display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                  value={landlordState}
                  onChange={e => updateFormData(e)}
                  placeholder="New York"
                  type="text"
                  name="landlordState"
                  required
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={landlordState}>
                  {"Landlord State"}
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "space-between", padding: "0 2% 0 0" }}>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                  value={landlordZip}
                  onChange={e => updateFormData(e)}
                  placeholder="94612"
                  type="number"
                  name="landlordZip"
                  required
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={landlordZip}>
                  {"Landlord Zip"}
                </label>
              </div>
            </div>
            <div style={{ margin: "0 0 20px", display: "flex" }}>
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
        }
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
