import { Hero } from "@/components/Hero";
import { StatusDashboard } from "@/components/StatusDashboard";
import { YourInvolvement } from "@/components/YourInvolvement";
import { SMEToolkit } from "@/components/SMEToolkit";
import { NeedHelp } from "@/components/NeedHelp";
import { ContactSupport } from "@/components/ContactSupport";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <StatusDashboard />
      <YourInvolvement />
      <SMEToolkit />
      <NeedHelp />
      <ContactSupport />
    </div>
  );
};

export default Index;
