export default function Quote({ showFirst }) {
  return (
    <div className="quote">
      {showFirst ? (
        <figure className="quote__figure">
          <blockquote>
            <p className="quote__para">
              “ I&apos;ve been interested in coding for a while but never taken
              the jump, until now. I couldn&apos;t recommend this course enough.
              I&apos;m now in the job of my dreams and so excited about the
              future. ”
            </p>
          </blockquote>
          <figcaption className="quote__caption">
            <h2 className="quote__name">Tanya Sinclair</h2>
            <div className="quote__title">UX Engineer</div>
          </figcaption>
        </figure>
      ) : (
        <figure className="quote__figure">
          <blockquote>
            <p className="qoute__para">
              “ If you want to lay the best foundation possible I&apos;d
              recommend taking this course. The depth the instructors go into is
              incredible. I now feel so confident about starting up as a
              professional developer. ”
            </p>
          </blockquote>
          <figcaption className="quote__caption">
            <h2 className="quote__name">John Tarkpor</h2>
            <div className="quote__title">Junior Front-end Developer</div>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
