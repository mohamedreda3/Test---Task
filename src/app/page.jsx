import HeroSection from "../layouts/hero-section";
import Categories from "../layouts/categories-section";
import ManageModal from "../components/categories/add-edit-category-modal";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center direction-rtl ">
      <HeroSection />
      <Categories />
    </div>
  );
}
