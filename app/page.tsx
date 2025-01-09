import Header from "./components/Header/header"
import Footer from "./components/Footer"
import Button from "@/app/components/Button"
import Card from '@/app/components/Card';

export default function MyPage() {
  

  return (
      <div>
          <Header />
          <Button>ボタン</Button>
          
          <Card>
      <h3>Title</h3>
      <p>This is a basic card.</p>
    </Card>
          <Footer />
      </div>
  );
}