export default function AdBanner() {
    return (
      <div className="text-center my-4">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-VOTRE_ID"
          data-ad-slot="VOTRE_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    )
  }