// // 0xc18a11531432a9c78b8c4a66bac13dfc1f82152a
// // import "../styles/globals.css"
// import "@rainbow-me/rainbowkit/styles.css"
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
// import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
// import { alchemyProvider } from "wagmi/providers/alchemy"
// import { publicProvider } from "wagmi/providers/public"

// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
//   [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
// )

// const { connectors } = getDefaultWallets({
//   appName: "0xNiluk",
//   chains,
// })

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// })
// function MyApp({ Component, pageProps }) {
//   return (
//     <WagmiConfig client={wagmiClient}>
//       <RainbowKitProvider chains={chains}>
//         <Component {...pageProps} />
//       </RainbowKitProvider>
//     </WagmiConfig>
//   )
// }

// export default MyApp
