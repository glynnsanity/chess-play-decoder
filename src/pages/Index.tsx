// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  console.log('Index component is rendering');
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Chess Play Decoder</h1>
        <p className="text-xl text-muted-foreground">Your Chess.com analytics app is loading...</p>
        <div className="mt-4 p-4 bg-card rounded-lg shadow">
          <p className="text-card-foreground">✓ App is working correctly</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
