import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneNumber from "../src/pages/phone/Phone";
import SmsCode from "../src/pages/sms-code/Code";
import NationalCode from "../src/pages/national-code/National";
import Intro from "../src/pages/intro/intro";
import InviteCode from "./pages/invite-code/invite-code";
import OpenAccount from "./pages/open/open-account";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/components/theme";
import Login from "../src/pages/login-page/login";
import StartCreateAccount from "../src/pages/start-create-account/start";
import PayanDarkhast from "./pages/payan-darkhast/payan-darkhast";
import MuiDrawer from "./pages/bottom-drawer/drawer";
import ForgetInformation from "./pages/forget-information/forget";
import ForgetPhoneNumber from "./pages/forget-phone/forget-phone";
import ForgetSmsCode from "./pages/forget-sms/forget-sms";
import ForgetNationalCode from "./pages/forget-national/forget-national";
import Finish from "./pages/forget-finish/finish";
import ForgetPassPhoneNumber from "./pages/forget.password/phone";
import ForgetPasswordNational from "./pages/forget.password/national";
import ForgetPassSms from "./pages/forget.password/sms";
import Date from "./pages/date/date";
import CreateUsername from "./pages/create-username/create-username";
import SetPassword from "./pages/set-password/set-pass";
import RegisterFinger from "./pages/active-fingerprint/finger-print";
import Marhale2 from "./pages/open-account2/open2";
import ScanDocument from "./pages/scan-document/scan";
import ScanNationalCard from "./pages/scan-nationalcart/scan-national";
import ScanBackCard from "./pages/scan-nationalcart/scan-backcard";
import Identify from "./pages/identification/identify";
import IdentifyVideo from "./pages/identify-video/video";
import Marhale3 from "./pages/marhale3/marhale3";
import PayanSabtenam from "./pages/payan-sabtnam/payan-sabtnam";
import Animation from "./pages/animation/animation";
import Profile from "./pages/profile/profile";
import Sefaresh from "./pages/sefaresh/sefaresh";
import VirayeshAddress from "./pages/virayesh-address/address";
import TaiinZaman from "./pages/taiin-zaman/taiin-zaman";
import PayanSefareshCard from "./pages/payan-sefaresh-card/payan-sefaresh";
import EtelaatHesab from "./pages/profile-hesabkarbari/hesab-karbari";
import Amniat from "./pages/amniat/aminat";
import Notice from "./pages/notice-profile/notice";
import ShowBlueBank from "./pages/show-blue-bank/show-blue";
import BlueClub from "./pages/Blue-club/blue-club";
import BlueBank from "./pages/profile-Bluebank/blue-bank";
import InviteFriend from "./pages/profile-invite/profile-invite";
import Home from "./pages/homepage/Home";
import Notif from "./pages/notif/notif";
import BoxInfo from "./pages/box-info/boxInfo";
import DaryaftSooratHesab from "./pages/daryaft-soorathesab/soorathesab";
import QrCodeScan from "./pages/scan/scan";
import EnteghalVajh from "./pages/enteghal/enteghal";
import EnteghalKhodkar from "./pages/enteghal-khodkar/enteghal-khodkar";
import Baygani from "./pages/baygani/baygani";
import Charge from "./pages/charge/charge";
import Bill from "./pages/bill/bill";
import AutoWithdraw from "./pages/auto-transfer/Automatic-withdrawal";
import Internet from "./pages/internet/internet";
import Reward from "./pages/gift/gift";
import Otaghak from "./pages/otaghak/otaghak";
import Meghdad from "./pages/meghdad/meghdad";
import Sibook from "./pages/sibook/sibook";
import Zara from "./pages/zara/zara";
import NormalCharge from "./pages/normal-charge/normalcharge";
import AfzayeshMojodi from "./pages/afzayesh-mojodi/afzayesh";
import MeghdarAfzayesh from "./pages/meghdar-afzayesh/meghdar-afzayesh";
import FishPardakht from "./pages/fish-pardakht/fidh-pardakht";
import Card from "./pages/card/card";
import NewCharge from "./pages/newCharge/charge";
import SomeHome from "./pages/someHome/somehome";
import PetStyle from "./pages/petStyle/petStyle";
import NekoMen from "./pages/neko-men/nekomen";
import { Provider } from "react-redux";
import { store } from "../src/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/phone-number" element={<PhoneNumber />} />
              <Route path="/sms-code" element={<SmsCode />} />
              <Route path="/national-code" element={<NationalCode />} />
              <Route path="/invite-code" element={<InviteCode />} />
              <Route path="/" element={<Intro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/start" element={<StartCreateAccount />} />
              <Route path="/ersal-darkhast" element={<PayanDarkhast />} />
              <Route path="/drawer" element={<MuiDrawer />} />
              <Route
                path="/forget-information"
                element={<ForgetInformation />}
              />
              <Route path="/forget-phone" element={<ForgetPhoneNumber />} />
              <Route path="/forget-code" element={<ForgetSmsCode />} />
              <Route path="/forget-national" element={<ForgetNationalCode />} />
              <Route path="/finish" element={<Finish />} />
              <Route path="/forgetpass-sms" element={<ForgetPassSms />} />
              <Route
                path="/forgetpass-national"
                element={<ForgetPasswordNational />}
              />
              <Route path="/date" element={<Date />} />
              <Route path="/create-username" element={<CreateUsername />} />
              <Route path="/set-password" element={<SetPassword />} />
              <Route path="/fingerprint" element={<RegisterFinger />} />
              <Route path="/scan" element={<ScanDocument />} />
              <Route path="/scan-nationalcard" element={<ScanNationalCard />} />
              <Route path="/scan-backcard" element={<ScanBackCard />} />
              <Route path="/identify" element={<Identify />} />
              <Route path="/identify-video" element={<IdentifyVideo />} />
              <Route path="/payan-sabtnam" element={<PayanSabtenam />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sefaresh" element={<Sefaresh />} />
              <Route path="/virayesh-address" element={<VirayeshAddress />} />
              <Route path="/entekhab-zaman" element={<TaiinZaman />} />
              <Route
                path="/payan-sefaresh-card"
                element={<PayanSefareshCard />}
              />
              <Route path="/Etelaat" element={<EtelaatHesab />} />
              <Route path="/amniat" element={<Amniat />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/show-blue-bank" element={<ShowBlueBank />} />
              <Route path="/blue-club" element={<BlueClub />} />
              <Route path="/ghavanin" element={<BlueBank />} />
              <Route path="/invite-friend" element={<InviteFriend />} />
              <Route path="/home" element={<Home />} />
              <Route path="/notification" element={<Notif />} />
              <Route path="/box-info" element={<BoxInfo />} />
              <Route path="/soorat-hesab" element={<DaryaftSooratHesab />} />
              <Route path="/qrcode-scan" element={<QrCodeScan />} />
              <Route path="/enteghal" element={<EnteghalVajh />} />
              <Route path="/enteghal-khodkar" element={<EnteghalKhodkar />} />
              <Route path="/baygani" element={<Baygani />} />
              <Route path="/charge" element={<Charge />} />
              <Route path="/bill" element={<Bill />} />
              <Route path="/auto-withdraw" element={<AutoWithdraw />} />
              <Route path="/internet" element={<Internet />} />
              <Route path="/reward" element={<Reward />} />
              <Route path="/otaghak" element={<Otaghak />} />
              <Route path="/meghdad" element={<Meghdad />} />
              <Route path="/sibook" element={<Sibook />} />
              <Route path="/zara" element={<Zara />} />
              <Route path="/normal-charge" element={<NormalCharge />} />
              <Route path="/afzayesh" element={<AfzayeshMojodi />} />
              <Route path="/meghdar-afzayesh" element={<MeghdarAfzayesh />} />
              <Route path="/fish-pardakht" element={<FishPardakht />} />
              <Route path="/card" element={<Card />} />
              <Route path="/new-charge" element={<NewCharge />} />
              <Route path="/some-home" element={<SomeHome />} />
              <Route path="/pet-style" element={<PetStyle />} />
              <Route path="/neko-men" element={<NekoMen />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </Provider>
  );
}
export default App;
