export interface SubMenuRouteType {
  name: string;
  link: string;
  description: string;
  background: string;
  ngoInitiatives: NgoInitiativesType[];
  preventionMeasures: NgoInitiativesType[];
  resources?: string[];
}

interface NgoInitiativesType {
  title: string;
  description: string;
}

// const subMenuRoutes: SubMenuRouteType[] = [
//   {
//     name: "#SGBV",
//     link: "/sgbv",
//     description: "Sexual and Gender-Based Violence (SGBV) is a severe human rights violation affecting individuals worldwide. Our NGO is committed to addressing this issue through advocacy, legal aid, and survivor support programs.",
//     background: "SGBV includes various forms of violence such as rape, sexual assault, and exploitation, often targeting women and marginalized groups. The impact is devastating, leading to physical, psychological, and economic harm.",
//     ngoInitiatives: [
//       {
//         title: "Awareness campaigns in schools and communities",
//         description: "Our NGO conducts educational programs in schools and communities to raise awareness about gender-based violence, child rights, and legal protections. Through interactive sessions, workshops, and media outreach, we aim to change societal attitudes and empower individuals to take action."
//       },
//       {
//         title: "Free legal aid for survivors",
//         description: "We provide free legal representation and consultation to survivors of gender-based violence, child marriage, and domestic abuse. Our legal team works to ensure justice by assisting survivors in filing complaints, obtaining restraining orders, and seeking reparations."
//       },
//       {
//         title: "24/7 support hotline and emergency response teams",
//         description: "A dedicated hotline is available round the clock to offer immediate assistance to survivors in distress. Our trained professionals provide counseling, legal guidance, and emergency rescue services for those in need of urgent intervention."
//       }
//     ],
//     preventionMeasures: [
//       {
//         title: "Education on gender equality and human rights",
//         description: "We promote gender-sensitive education and human rights training in schools and community centers to prevent harmful practices and create an inclusive society."
//       },
//       {
//         title: "Support services for survivors, including shelters and counseling",
//         description: "Our NGO offers safe shelters for survivors escaping violence and provides professional counseling to help them recover emotionally and psychologically."
//       },
//       {
//         title: "Legislative advocacy for stricter laws and policies",
//         description: "We collaborate with policymakers and human rights organizations to push for stronger legal protections against sexual violence, domestic abuse, and other gender-based injustices."
//       }
//     ],   
//     resources: ["/articles/sgbv-awareness", "/articles/sgbv-support", "/resources/survivor-stories"]
//   },
//   {
//     name: "Female Genital Mutilation",
//     link: "/fgm",
//     description: "Female Genital Mutilation (FGM) is a harmful cultural practice that violates the rights of girls and women. Our NGO works tirelessly to eradicate this practice through advocacy, education, and healthcare support.",
//     background: "FGM involves the partial or total removal of female genitalia for non-medical reasons. It can lead to severe health complications, including infections, infertility, and psychological trauma.",
//     ngoInitiatives: [
//       {
//         title: "Community outreach and sensitization programs",
//         description: "We conduct community engagement programs to educate people about the dangers of harmful practices such as Female Genital Mutilation (FGM). Through workshops, seminars, and grassroots activism, we aim to change cultural perceptions and encourage the protection of women’s rights."
//       },
//       {
//         title: "Medical and psychological support for survivors",
//         description: "Our NGO provides survivors with access to free medical treatment, psychological counseling, and rehabilitation services. We work with healthcare professionals to ensure survivors receive holistic care to recover from the trauma of FGM and other forms of violence."
//       },
//       {
//         title: "Collaborating with lawmakers to strengthen anti-FGM policies",
//         description: "We partner with government officials and legal organizations to push for stricter laws against FGM. By advocating for comprehensive legislation and better enforcement, we aim to criminalize the practice and hold perpetrators accountable."
//       }
//     ],
//     preventionMeasures: [
//       {
//         title: "Engaging local leaders and communities in discussions about FGM",
//         description: "We believe that cultural change begins within communities. Our NGO works with traditional leaders, religious figures, and local influencers to educate communities about the dangers of FGM and promote alternative, non-harmful rites of passage."
//       },
//       {
//         title: "Providing alternative rites of passage for cultural acceptance",
//         description: "To ensure cultural traditions are preserved while eliminating harmful practices, we offer alternative rites of passage that celebrate girls without subjecting them to FGM. These programs include mentorship, education, and community recognition ceremonies."
//       },
//       {
//         title: "Advocating for stringent legal actions against perpetrators",
//         description: "We push for the prosecution of individuals who perform or facilitate FGM. Our legal team works to ensure that justice is served and that affected girls and women receive the support they need."
//       }
//     ],
//     resources: ["/articles/fgm-awareness", "/articles/fgm-support", "/resources/fgm-survivors"]
//   },
//   {
//     name: "Child Marriage/Abuse",
//     link: "/child-marriage",
//     description: "Child marriage and abuse deprive young girls of their future. Our organization fights against this practice through education, legal interventions, and empowerment initiatives.",
//     background: "Millions of girls are forced into marriage before the age of 18, leading to school dropouts, early pregnancies, and domestic abuse. This issue is deeply rooted in poverty, gender inequality, and cultural norms.",
//     ngoInitiatives: [
//       "Scholarship programs for at-risk girls",
//       "Legal aid and advocacy for victims",
//       "Rescue operations and safe shelters for affected children"
//     ],
//     preventionMeasures: [
//       "Community sensitization on the dangers of child marriage",
//       "Stronger legal enforcement and penalties for offenders",
//       "Economic empowerment programs for young girls and families"
//     ],
//     resources: ["/articles/child-marriage-awareness", "/articles/child-marriage-support", "/resources/girls-rights"]
//   },
//   {
//     name: "Sexual Harassment",
//     link: "/sexual-harassment",
//     description: "Sexual harassment is a pervasive issue in workplaces, schools, and public spaces. Our NGO is committed to creating safe environments and providing legal and emotional support to victims.",
//     background: "Sexual harassment includes unwelcome advances, inappropriate remarks, and coercion. It affects victims' mental health, career growth, and personal well-being.",
//     ngoInitiatives: [
//       "Workplace safety programs and policy advocacy",
//       "Free legal services for survivors",
//       "Counseling and rehabilitation programs"
//     ],
//     preventionMeasures: [
//       "Implementing strict anti-harassment policies in workplaces and schools",
//       "Raising awareness about consent and personal boundaries",
//       "Providing safe reporting mechanisms for victims"
//     ],
//     resources: ["/articles/sexual-harassment-awareness", "/articles/sexual-harassment-support", "/resources/legal-assistance"]
//   },
//   {
//     name: "Domestic Violence",
//     link: "/domestic-violence",
//     description: "Domestic violence affects individuals regardless of gender or socioeconomic background. Our organization offers legal aid, shelter, and psychological support for survivors.",
//     background: "Domestic violence includes physical, emotional, and financial abuse within a household. Victims often feel trapped due to economic dependence, fear, or social stigma.",
//     ngoInitiatives: [
//       "Safe houses for survivors",
//       "Financial independence training and job placement programs",
//       "Legal assistance and restraining order support"
//     ],
//     preventionMeasures: [
//       "Raising awareness about the signs of domestic abuse",
//       "Encouraging communities to speak out and support victims",
//       "Strengthening laws and law enforcement response to abuse cases"
//     ],
//     resources: ["/articles/domestic-violence-awareness", "/articles/domestic-violence-support", "/resources/domestic-safety-plan"]
//   }
// ];

// export default subMenuRoutes;

const subMenuRoutes: SubMenuRouteType[] = [
  {
    name: "#SGBV",
    link: "/sgbv",
    description: "Sexual and Gender-Based Violence (SGBV) is a severe human rights violation affecting individuals worldwide. Our NGO is committed to addressing this issue through advocacy, legal aid, and survivor support programs.",
    background: "SGBV includes various forms of violence such as rape, sexual assault, and exploitation, often targeting women and marginalized groups. The impact is devastating, leading to physical, psychological, and economic harm.",
    ngoInitiatives: [
      {
        title: "Awareness campaigns in schools and communities",
        description: "We conduct educational programs in schools and communities to inform individuals about the dangers and consequences of SGBV. These initiatives aim to promote gender equality and empower survivors to seek justice."
      },
      {
        title: "Free legal aid for survivors",
        description: "Our organization provides pro bono legal assistance to survivors of SGBV, ensuring they have access to justice and protection. This includes legal representation, case filing, and advocacy."
      },
      {
        title: "24/7 support hotline and emergency response teams",
        description: "We operate a 24/7 helpline for survivors to seek immediate assistance and support. Our emergency response teams provide on-ground help, including medical care, shelter, and psychological counseling."
      }
    ],
    preventionMeasures: [
      {
        title: "Education on gender equality and human rights",
        description: "By integrating gender equality and human rights education into schools and communities, we strive to change mindsets and reduce the prevalence of SGBV."
      },
      {
        title: "Support services for survivors, including shelters and counseling",
        description: "We provide safe shelters and trauma-informed counseling to help survivors heal and reintegrate into society with dignity."
      },
      {
        title: "Legislative advocacy for stricter laws and policies",
        description: "We work with lawmakers to push for stronger policies that criminalize SGBV and ensure perpetrators are held accountable."
      }
    ],
    resources: ["/articles/sgbv-awareness", "/articles/sgbv-support", "/resources/survivor-stories"]
  },
  {
    name: "Female Genital Mutilation",
    link: "/fgm",
    description: "Female Genital Mutilation (FGM) is a harmful cultural practice that violates the rights of girls and women. Our NGO works tirelessly to eradicate this practice through advocacy, education, and healthcare support.",
    background: "FGM involves the partial or total removal of female genitalia for non-medical reasons. It can lead to severe health complications, including infections, infertility, and psychological trauma.",
    ngoInitiatives: [
      {
        title: "Community outreach and sensitization programs",
        description: "We engage communities through educational campaigns to raise awareness about the harmful effects of FGM and encourage cultural change."
      },
      {
        title: "Medical and psychological support for survivors",
        description: "Our organization provides healthcare services, including surgery and therapy, to help survivors recover from the physical and emotional trauma of FGM."
      },
      {
        title: "Collaborating with lawmakers to strengthen anti-FGM policies",
        description: "We work with government agencies and policymakers to ensure the enforcement of laws banning FGM and to hold perpetrators accountable."
      }
    ],
    preventionMeasures: [
      {
        title: "Engaging local leaders and communities in discussions about FGM",
        description: "By involving traditional and religious leaders in conversations about FGM, we foster a community-driven approach to ending this practice."
      },
      {
        title: "Providing alternative rites of passage for cultural acceptance",
        description: "We promote alternative, non-harmful cultural practices that celebrate girls without subjecting them to FGM."
      },
      {
        title: "Advocating for stringent legal actions against perpetrators",
        description: "We push for tougher penalties and legal action against individuals and communities that still practice FGM."
      }
    ],
    resources: ["/articles/fgm-awareness", "/articles/fgm-support", "/resources/fgm-survivors"]
  },
  {
    name: "Child Marriage/Abuse",
    link: "/child-abuse",
    description: "Child marriage and abuse deprive young girls of their future. Our organization fights against this practice through education, legal interventions, and empowerment initiatives.",
    background: "Millions of girls are forced into marriage before the age of 18, leading to school dropouts, early pregnancies, and domestic abuse. This issue is deeply rooted in poverty, gender inequality, and cultural norms.",
    ngoInitiatives: [
      {
        title: "Workplace safety programs and policy advocacy",
        description: "We develop and advocate for workplace safety programs and policies to prevent sexual and gender-based violence (SGBV). These initiatives focus on creating safe environments, promoting accountability, and ensuring survivors have access to justice and support."
      },
      {
        title: "Free legal services for survivors",
        description: "Our organization offers free legal services to survivors of SGBV, including legal representation, advice, and assistance with filing cases. We aim to empower survivors by ensuring they have access to justice and protection under the law."
      },
      {
        title: "Counseling and rehabilitation programs",
        description: "We provide counseling and rehabilitation programs for survivors of SGBV, offering psychological support, trauma therapy, and skill-building workshops to help them rebuild their lives and regain confidence."
      }
    ],
    preventionMeasures: [
      {
        title: "Implementing strict anti-harassment policies in workplaces and schools",
        description: "We advocate for and support the implementation of strict anti-harassment policies in workplaces and schools to create safer environments and prevent incidents of SGBV."
      },
      {
        title: "Raising awareness about consent and personal boundaries",
        description: "We conduct workshops and campaigns to educate individuals about the importance of consent, personal boundaries, and respectful relationships, aiming to foster a culture of mutual respect and understanding."
      },
      {
        title: "Providing safe reporting mechanisms for victims",
        description: "We establish and promote safe, confidential reporting mechanisms for victims of SGBV, ensuring they can report incidents without fear of retaliation and receive the support they need."
      }
    ],
  },
  {
    name: "Sexual Harassment",
    link: "/sexual-harassment",
    description: "Sexual harassment is a pervasive issue in workplaces, schools, and public spaces. Our NGO is committed to creating safe environments and providing legal and emotional support to victims.",
    background: "Sexual harassment includes unwelcome advances, inappropriate remarks, and coercion. It affects victims' mental health, career growth, and personal well-being.",
    ngoInitiatives: [
      {
        title: "Workplace safety programs and policy advocacy",
        description: "We develop and promote workplace safety programs and advocate for policies that ensure safe and respectful environments. These initiatives aim to prevent sexual and gender-based violence (SGBV) and protect the rights of employees."
      },
      {
        title: "Free legal services for survivors",
        description: "Our organization provides free legal assistance to survivors of SGBV, including legal advice, representation, and support in navigating the justice system. We strive to ensure survivors have access to justice and protection."
      },
      {
        title: "Counseling and rehabilitation programs",
        description: "We offer counseling and rehabilitation programs to help survivors of SGBV heal from trauma. These programs include psychological support, therapy sessions, and skill-building workshops to empower survivors and help them rebuild their lives."
      }
    ],
    preventionMeasures: [
      {
        title: "Implementing strict anti-harassment policies in workplaces and schools",
        description: "We work with institutions to implement strict anti-harassment policies that create safe spaces for individuals. These policies are designed to prevent SGBV and ensure accountability for perpetrators."
      },
      {
        title: "Raising awareness about consent and personal boundaries",
        description: "We conduct awareness campaigns and workshops to educate communities about the importance of consent, personal boundaries, and respectful relationships. These efforts aim to foster a culture of respect and prevent SGBV."
      },
      {
        title: "Providing safe reporting mechanisms for victims",
        description: "We establish confidential and accessible reporting mechanisms for victims of SGBV. These systems ensure that survivors can safely report incidents and receive the necessary support and protection."
      }
    ],
  },
  {
    name: "Domestic Violence",
    link: "/domestic-violence",
    description: "Domestic violence affects individuals regardless of gender or socioeconomic background. Our organization offers legal aid, shelter, and psychological support for survivors.",
    background: "Domestic violence includes physical, emotional, and financial abuse within a household. Victims often feel trapped due to economic dependence, fear, or social stigma.",
    ngoInitiatives: [
      {
        title: "Safe houses for survivors",
        description: "We provide safe houses and shelters for survivors of domestic abuse, offering a secure and supportive environment where they can heal and rebuild their lives away from their abusers."
      },
      {
        title: "Financial independence training and job placement programs",
        description: "We offer training programs to help survivors gain financial independence, including skill-building workshops, resume assistance, and job placement support. These initiatives empower survivors to achieve self-sufficiency."
      },
      {
        title: "Legal assistance and restraining order support",
        description: "Our organization provides legal assistance to survivors, including help with filing restraining orders, navigating the legal system, and accessing protection. We ensure survivors have the legal support they need to stay safe."
      }
    ],
    preventionMeasures: [
      {
        title: "Raising awareness about the signs of domestic abuse",
        description: "We conduct awareness campaigns to educate communities about the signs of domestic abuse and how to recognize them. These efforts aim to empower individuals to identify abuse and take action to support victims."
      },
      {
        title: "Encouraging communities to speak out and support victims",
        description: "We work to create a culture where communities feel empowered to speak out against domestic abuse and support victims. This includes training community leaders and members to provide safe and non-judgmental support."
      },
      {
        title: "Strengthening laws and law enforcement response to abuse cases",
        description: "We advocate for stronger laws and improved law enforcement responses to domestic abuse cases. Our efforts focus on ensuring that survivors receive timely and effective protection and justice."
      }
    ],
  }
];

export default subMenuRoutes;

