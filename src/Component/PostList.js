const PostList = () => {
    return (
      <>
        <div className="px-6 bg-chalfal_color text-chalfal_text">
          <div className="border-chalfal_border bg-chalfal_color-brighter p-2 rounded-md">
            <h5 className="text-sm text-chalfal_text-darker mb-1">
              Posted by i/test123 5 hours ago
            </h5>
            <h2 className="text-xl mb-3">
              How to build webRTC m:m audio/video live-streams/calls client to
              client via gateway for IP protection?
            </h2>
            <div className="text-sm leading-6">
              <p>
                Hi, mux.com (and also agora.io and so on) is a great service,
                but very expensive since it's a server solution. I can't use
                that. Discord is a great client solution, that just uses
                gateways as a pass-through to hide IP addresses and so on. They
                described their entire architecture here:
                https://discord.com/blog/how-discord-handles-two-and-half-million-concurrent-voice-users-using-webrtc
                Discord ain't the only one with this approach, Instagram has
                AFAIK the same approach too, since it's cheap and does what it
                does I want to use for my social media app (like instagram) this
                solution too, but without these many custom built things to
                increase performance. I am a one-man team and I can't handle
                that complexity; still i don't want to use mux because it's way
                too expensive for me I am okay with the stock/standard
                performance. Does anyone know or can point me to a tutorial,
                where to start building such webRTC elixier gateway solution for
                m:m audio/video live streams calls? maybe there already is code
                published that I can just copy paste thanks a lot!!
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default PostList;