import "../components/Hero";


const Header = () => {
    const { setStatus } = useStatus();
    const [walletAddress, setWalletAddress] = useState("");
  
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      setWalletAddress(walletResponse.address);
      setStatus(walletResponse.status);
    };
  
    useEffect(() => {
      const prepare = async () => {
        const walletResponse = await getCurrentWalletConnected();
        setWalletAddress(walletResponse.address);
        setStatus(walletResponse.status);
  
        addWalletListener();
      };
  
      prepare();
    }, []);
  
    const addWalletListener = () => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async (accounts) => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setStatus("");
          } else {
            setWalletAddress("");
            setStatus("🦊 Connect to Metamask using Connect Wallet button.");
          }
        });
      }
    };

}