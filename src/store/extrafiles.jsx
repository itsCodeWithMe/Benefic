{
  /* <Spinner_global
              image={Spinner_frame1}
              text={SpinningSection[0].text1.heading}
              para={SpinningSection[0].text1.para}
              initialHeading={SpinningSection[0].text1.initialHeading}
              initialHeadingBool={SpinningSection[0].text1.initialHeadingBool}
            />
            <Spinner_global
              image={Spinner_frame2}
              text={SpinningSection[0].text2.heading}
              para={SpinningSection[0].text2.para}
              initialHeading={SpinningSection[0].text2.initialHeading}
              initialHeadingBool={SpinningSection[0].text2.initialHeadingBool}
            />
            <Spinner_global
              image={Spinner_frame3}
              text={SpinningSection[0].text3.heading}
              para={SpinningSection[0].text3.para}
              initialHeading={SpinningSection[0].text3.initialHeading}
              initialHeadingBool={SpinningSection[0].text3.initialHeadingBool}
            />
            <Spinner_global
              image={Spinner_frame4}
              text={SpinningSection[0].text4.heading}
              para={SpinningSection[0].text4.para}
              initialHeading={SpinningSection[0].text4.initialHeading}
              initialHeadingBool={SpinningSection[0].text4.initialHeadingBool}
            /> */
}

{
  Serving_JSON.Spinning_section.map((item, index) => (
    <React.Fragment key={index}>
      {Object.keys(item).map((key, subIndex) => (
        <Spinner_global
          key={key}
          image={eval(`Spinner_frame${subIndex + 1}`)}
          text={item[key].heading}
          para={item[key].para}
          initialHeading={item[key].initialHeading}
          initialHeadingBool={item[key].initialHeadingBool}
        />
      ))}
    </React.Fragment>
  ));
}
