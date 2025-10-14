

export default function Contact() {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">
          For event contributions, donations, or media inquiries.
        </span>
        <div className="mt-2 text-sm">
          Send an email with any relevant details:
          <a
            href="mailto:violetdanse@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="underline italic ml-2 mt-2 mb-8"
          >
            violetdanse@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center my-10">
        <span className="font-bold">
          For all artistic collaborations or connections.
        </span>
        <div className="lg:text-sm mt-2">
          Send a direct message to the Artists For People Instagram:
          <a
            href="https://instagram.com/artistsforpeople"
            target="_blank"
            rel="noreferrer"
            className="ml-2 mt-2 lg:text-sm"
          >
            <span className="underline italic">@artistsforpeople</span>
          </a>
        </div>
        <div className="lg:text-sm mt-2">
          Or the event coordinator's (myself) Instagram:
          <a
            href="https://instagram.com/violetdanse"
            target="_blank"
            rel="noreferrer"
            className="ml-2 mt-2 lg:text-sm"
          >
            <span className="underline italic">@violetdanse</span>
          </a>
        </div>
      </div>
      <div className="text-sm mb-10 p-4 border rounded-lg">
        <span className="italic">Note On Response Time:</span> I do my best to
        respond within 24-48 hours. If this ends up not being the case, please
        do not hesitate to send a follow up email or message.
      </div>
    </div>
  );
}
