 

function TermsBlock({ children }: { children: React.ReactNode }) { 

  return <div className="flex flex-col gap-[1rem]">{children}</div> 

} 

 

function Heading({ className, children }: { className: string, children: React.ReactNode }) { 

  return <div className={"text-xl md:text-2xl font-bold text-darkGreen " + className}>{children}</div> 

} 

 

function SubHeading({ children }: { children: React.ReactNode }) { 

  return <Heading className="md:text-[14px] text-[14px]">{children}</Heading> 

} 

 

function HeadingAndInfo({ children, heading }: { children: React.ReactNode, heading: string }) { 

  return ( 

    <div className="text-[#5b5b5b] flex flex-col gap-[0.5rem]"> 

      <Heading className="">{heading}</Heading> 

      <div className="text-[14px] flex flex-col gap-[1rem]">{children}</div> 

    </div> 

  ); 

} 

 

function TermsofUseHeading({ children }: { children: React.ReactNode }) { 

  return <h2 className="text-5xl text-darkGreen my-[1rem]">{children}</h2> 

} 

 

const TermOfUse = () => { 

  return ( 

    <div className="container mx-auto my-[2rem] md:my-[0rem] flex flex-col gap-[1rem]"> 

      <TermsBlock> 

        <HeadingAndInfo heading="Introduction"> 

          Welcome to Salaryfy! We are a job placement and career development company that helps users find new job opportunities with a salary hike. Our platform offers personalized job search services, career development resources, and skill-based placement programs to help you achieve your career goals. To ensure the best possible experience for all our users, we have established these Terms of Use that govern your use of the Salaryfy platform. Please read these Terms of Use carefully before accessing or using our services. By accessing or using our services, you agree to be bound by these Terms of Use. You may not access or use our services if you do not agree to these Terms of Use. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="User Accounts"> 

          You must first confirm your eligibility on our website before you may use our services. You can either go to Instant Placement or Skill Placement through that. You consent to disclose information truthfully and completely, and you promise to use all reasonable efforts to meet the eligibility test. Also, once the process is complete, you must keep your login information private and refrain from sharing your account with anybody. All actions taken on your behalf while using your account are your responsibility. If we suspect fraudulent or suspicious activity, you violate our Conditions of Use or both, we have the right to suspend or delete your account at any time. In the event that we do suspend or terminate your account, we will send you a formal notification along with a rationale. By contacting our customer care team, you can also request the deletion of your account at any moment. All of your personal information and account data will be permanently deleted from our servers once your account has been deleted unless otherwise required by law or for legal or regulatory purposes. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="User Registration"> 

          You must submit correct and comprehensive information about yourself in order to register for Salaryfy's services. For our services, you must be at least 18 years old to register. You consent to hear from Salaryfy regarding our services when you sign up for our services. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Delivery of Services: "> 

          Salaryfy is a company that specializes in providing placement and salary hike services to Candidates/ Job Seekers. The company leverages the latest data analytics technologies to deliver comprehensive insights into job trends, placements, job benchmarking, and salary optimization. Their team of experienced professionals has helped numerous Candidates/ Job Seekers improve their salary packages and make better decisions related to salary matters. One of the key services provided by Salaryfy is job trend analysis. The company has a team of data analysts who continuously monitor the job market and identify emerging job trends. This helps Candidates/ Job Seekers stay up-to-date with the latest job requirements and tailor their skills accordingly. With Salaryfy's job trend analysis, Candidates/ Job Seekers can identify the most in-demand skills and take steps to acquire them. Another important service provided by Salaryfy is placement services. The company has an extensive network of recruiters who help Candidates/ Job Seekers find suitable job opportunities. They work closely with Candidates/ Job Seekers to understand their requirements and connect them with the right recruiters. With Salaryfy's placement services, Candidates/ Job Seekers can save time and effort in finding the right job. Salary benchmarking is another service provided by Salaryfy. The company has access to a vast database of salary information across various industries and job roles. They use this information to provide Candidates/ Job Seekers with accurate salary benchmarks, which helps them negotiate better salary packages. With Salaryfy's salary benchmarking, Candidates/ Job Seekers can ensure that they are getting paid fairly for their skills and experience. Salary optimization is another important service provided by Salaryfy. The company helps Candidates/ Job Seekers optimize their salary packages by identifying areas where they can negotiate better terms. They provide Candidates/ Job Seekers with insights into industry-specific salary trends and help them understand the market dynamics. With Salaryfy's salary optimization services, Candidates/ Job Seekers can improve their earning potential and ensure that they are getting the best possible salary package. Salaryfy will provide access to our services once you have created a user account and agreed to our Terms of Use. Our services may include personalized job search services, career development resources, and skill-based placement programs. We will make reasonable efforts to ensure that our services are available to you at all times, but we cannot guarantee uninterrupted access due to factors beyond our control. We reserve the right to modify or discontinue any of our services at any time without notice. Overall, the delivery of services provided by Salaryfy is efficient and effective. The company leverages the latest data analytics technologies to deliver comprehensive insights to Candidates/ Job Seekers. Their team of experienced professionals has helped numerous Candidates/ Job Seekers improve their salary packages and make better decisions related to salary matters. Whether it's job trend analysis, placement services, salary benchmarking, or salary optimization, Salaryfy has the expertise and resources to deliver top-notch services to their Candidates/ Job Seekers. In the event that we must suspend or terminate your use of our services, we will give you a formal notification and a rationale for the action. Also, you can stop using our services at any time by sending us a notice in writing. The provisions of the Terms of Use shall survive termination. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Payment Terms"> 

          Salaryfy offers various types of payment terms for their Skill-Based and Instant Placement services. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Under Skill-Based Placement services:"> 

          The service fee-based payment model is applicable to Candidates/ Job Seekers who engage in Salaryfy's Instant Placement services. Under this model, the Candidate/ Job Seeker is required to pay a service fee, which is 1% of their annual CTC, after they secure employment through Salaryfy's services. In both payment models, Salaryfy reserves the right to initiate legal action for recovery of amounts due in case of a delay in making payments beyond the payment due date or default in payment. The Candidate/ Job Seeker is liable to pay additional charges and/or default charges as set out in the agreement in such cases. In conclusion, Salaryfy offers flexible payment terms that are tailored to the individual needs of their Candidates/ Job Seekers. The ISA payment model is ideal for Candidates/ Job Seekers who want to learn new skills without any upfront costs, while the service fee based payment model is suitable for Candidates/ Job Seekers who want to engage Salaryfy's Instant Placement services. With both payment models, Candidates/ Job Seekers can be assured of quality services and meaningful insights that can help them improve their income growth and make better decisions related to their career and income matters. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Under Instant Placement Services:"> 

          The service fee-based payment model is applicable to Candidates/ Job Seekers who engage in Salaryfy's Instant Placement services. Under this model, the Candidate/ Job Seeker is required to pay a service fee, which is 1% of their annual CTC, after they secure employment through Salaryfy's services. In both payment models, Salaryfy reserves the right to initiate legal action for recovery of amounts due in case of a delay in making payments beyond the payment due date or default in payment. The Candidate/ Job Seeker is liable to pay additional charges and/or default charges as set out in the agreement in such cases. In conclusion, Salaryfy offers flexible payment terms that are tailored to the individual needs of their Candidates/ Job Seekers. The ISA payment model is ideal for Candidates/ Job Seekers who want to learn new skills without any upfront costs, while the service fee based payment model is suitable for Candidates/ Job Seekers who want to engage Salaryfy's Instant Placement services. With both payment models, Candidates/ Job Seekers can be assured of quality services and meaningful insights that can help them improve their income growth and make better decisions related to their career and income matters. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Income Sharing Agreement"> 

          <h5> 

            For Skill-Based Placement (Under Pay after Placement enrolment plan) 

          </h5> 

          By entering into this Agreement, you agree to pay a percentage of your earned income to the Institution (Salaryfy*) in accordance with the terms and conditions of this Agreement in exchange for receiving the training and placement provided by Salaryfy*. WHEREAS: The Institution (Salaryfy*) is in the business of placing students in training programs related to a variety of courses, and You have agreed to enroll with the Institution (Salaryfy*) for the purpose of obtaining Training and Placement on the terms and conditions as stated in this Agreement. If you are under the age of 24 (twenty-four), please ask your legal representatives (parent or legal guardian) to refer to the contract conditions in accordance with the terms and conditions outlined in this Agreement, you have accepted to enroll with the Institute (Salaryfy*) in order to take advantage of the Training and Placement. In exchange for the Training and Placement offered by the Institution (Salaryfy*) and subject to all of the terms, commitments, obligations, and conditions specified in this Agreement, You and the Institution (Salaryfy*) agree as follows: 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="1. DEFINITIONS: For purposes of this Agreement:"> 

          <ol className="list-alph"> 

            <li> 

              A."Earned Income" / "CTC" refers to your entire salary (including variable pay), compensation, and gross income from employment or self-employment in any organization that has been reported or is needed to be reported on an income tax return. 

              <ul className="list-disc ml-6"> 

                <li> 

                  Earned income also includes any non-cash consideration received or deemed earned by You, directly or indirectly, such as contributions to qualified and non-qualified deferred compensation and retirement benefit plans, fringe benefits not reported as wages for compensation, income, and distributions from Your active participation in any entity, and equity rights or deferred compensation generated or attributable to the current period of Your employment. 

                </li> 

                <li> 

                  Moreover, Earned Income includes any amounts earned or payable to You, directly or indirectly, as a result of Your provision of services to a related party. 

                </li> 

                <li> 

                  The Institution (Salaryfy*) may estimate Your Earned Income using documentation other than Your income tax return at its discretion, provided that the documentation is from another verifiable source acceptable to the Institution. 

                </li> 

                <li> 

                  It is clarified that any dispute on Your Earned Income (including if the Earned Income was earned pursuant to the skill developed through Training) shall be determined by the Institution (Salaryfy*) at its sole discretion and such determination shall be binding on You. 

                </li> 

              </ul> 

            </li> 

            <li> 

              B."Employer" refers to any person or organization for whom You provide services, whether as an employee, an independent contractor, or in any other capacity.. 

            </li> 

            <li> 

              C."Certification Completion Date" refers to the date on which You obtained the certificate after completing and passing all curriculum-related assessments stated in the Course or as personally assigned to You by the career coaches/trainers/mentors/batch coordinators of the Institution(Salaryfy*). 

            </li> 

            <li> 

              D.“Income Share" refers to a fixed percentage of Your Earned Income. Your Income Share under this Agreement is at least 12.00% (twelve percent) of the Earned Income, subject to adjustment for underreporting or overreporting of Earned Income, as described herein. 

            </li> 

            <li> 

              E."Monthly Payment" means the amount of Your Income Share times Your Earned Income. 

            </li> 

            <li> 

              F."Payment Term" refers to the period commencing upon Your Earned Income during which period You have an obligation to make Monthly Payments/ ISA threshold amount to the Institution (Salaryfy*), as provided under this Agreement. 

            </li> 

            <li> 

              G.“Terminal Exam” refers to the exam/ test conducted by the end of each term by the Institution (Salaryfy*) during the program. 

            </li> 

            <li> 

              H."Person" means any individual, partnership, corporation, limited liability partnership, trust or unincorporated association, joint venture, or other entity or governmental body. 

            </li> 

          </ol> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="2.Payment Channels"> 

          <ol> 

            <li> 

              A.NBFC/ Credit Card You will either be using a credit card or an NBFC to make your threshold ISA payment to the institution (Salaryfy*). As per the terms of this agreement, you shall pay the Institution (Salaryfy*) 12% of your yearly income by an NBFC or credit card within 30 days of the start date of employment 

            </li> 

            <li> 

              B.Bank auto-sweep You have the option of repaying monthly payments for threshold ISA payments to institutions (Salaryfy*) by bank-auto sweep unless the bank account where the payments are made is the same as the one where your earned income is received. 

            </li> 

          </ol></HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="3. RIGHTS AND OBLIGATIONS UNDER THIS AGREEMENT"> 

          <ol> 

            <li> 

              A.The Institution (Salaryfy*) agrees to provide You with the Training and hence Placement, subject to the terms and conditions of this Agreement. 

            </li> 

            <li> 

              B.It is clarified that CTC will include the total of the fixed salary (+) the variable pay (+) the employment benefits. 

            </li> 

            <li> 

              C.You agree to pay the Institution (Salaryfy*) in exchange for the Training. The ISA amount of 12% must be paid to the institution within 30 days of the start date of employment. It can be paid directly, through NBFCs, or with a credit card. It is clarified that You can only pay the fee to the Institution (Salaryfy*) in a single transaction. 

            </li> 

            <li> 

              D.This Agreement shall be valid for a period of 12 months from the Certification Date. 

            </li> 

            <li> 

              E.You agree that the Institution (Salaryfy*) will manage and processall parts of this Agreement. 

            </li> 

            <li> 

              F.You also undertake to cooperate with all inquiries made by the Institution regarding Your compliance with the terms and circumstances of this Agreement, including providing information, documents, and authorizations as requested. 

            </li> 

          </ol></HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="4.OBLIGATIONS OF THE STUDENTS"> 

          <ul> 

            <li> 

              A.For the assessment year in which Your Payment begins, You agree to file your income tax returns no later than 31st March for the financial each year, and to timely file any state or local tax returns by the applicable due date. You agree to perform any similar requirements or procedures for any other country’s taxing authority, as applicable. 

            </li> 

            <li> 

              B.You shall submit to the Institution (Salaryfy*), on or before the 10 April of the calendar year, the proof of filing of the income tax returns as set out in Clause 5.A. 

            </li> 

            <li> 

              C.If You fail to file the income tax returns as set out in Clause 5.A and to submit to the Institution (Salaryfy*) the proof of filing of the income tax returns in the manner as set out in Clause 5.B. above, the Institution (Salaryfy*) shall be entitled to pursue legal proceedings and the Institution (Salaryfy*) shall also be entitled to transfer the amounts payable by You from your bank account to the bank account of the Institution (Salaryfy*). 

            </li> 

            <li> 

              D.You shall provide to the Institution (Salaryfy*), Your salary slips as provided by the Employer or such other proof of payment as required by the Institution (Salaryfy*) on a monthly basis either through the student dashboard or by emailing the same to the such email address as designated by the Institution (Salaryfy*). 

            </li> 

            <li> 

              E.If You fail to provide the salary slips or such other proof of payment as required by the Institution (Salaryfy*) for one calendar month, the Institution (Salaryfy*) shall issue You a request calling upon you to provide the salary slips or such other proof of payment as required by the Institution (Salaryfy*). 

            </li> 

            <li> 

              F.If, however, You fail to provide the salary slips or such other proof of payment as required by the Institution (Salaryfy*) for two consecutive months, the Institution (Salaryfy*) shall be entitled to take necessary actions for the recovery of the amount due and payable by You and the Institution (Salaryfy*) shall also to transfer the amounts payable by You from Your bank account to the bank account of the Institution (Salaryfy*). 

            </li> 

            <li> 

              G.In addition to the salary slips, You shall provide to the Institution (Salaryfy*), the bank statement for the Approved Bank Account, and such other bank accounts in which Your Earned Income is deposited. 

            </li> 

            <li> 

              H. Job Guarantee Criteria: In order to guarantee a 100% placement through this program, the student hereby consents to the following terms. 

              <li ml-5> 

                a. In all of his TERMS, the student must consistently maintain an attendance record of higher than 80%. 

              </li> 

              <li> 

                b. The student is required to complete all of the assignments and online exercises that are listed in the course syllabus. 

              </li> 

              <li> 

                c. The student must receive a score of at least 75% on each of the terminal exams. 

              </li> 

              <li> 

                d. The course completion exam must be passed with a score of at least 75%. 

              </li> 

            </li> 

            <li> 

              I.Also, in each of the terminal exams, if the student receives a score 

              of less than 75% even after two attempts, they will be given the 

              opportunity to retake the exam by paying the institution Rs. 3,000 as 

              a restitution charge (Non-Refundable). 

            </li> 

            <li> 

              J.The student might also choose to receive the NASSCOM Certificate for 

              the specific term by paying the institution an Rs. 1000 amount. 

              However, in any of the aforementioned scenarios, the security deposit 

              will not be refunded to the students. 

            </li> 

            <li> 

              K.Your Obligations in Relation to Securing a Job Offer: For the 

              Institution (Salaryfy*) to assist You to secure a job for You, You 

              must have completed and passed all the career and skill development 

              tasks both listed in the Course/curriculum in the order they appear in 

              the Course and as personally assigned to you by career coaches of the 

              Institution (Salaryfy*) and shall have completed your Certification. 

              It is clarified that if You do not complete and pass the 

              Certification, You will not be eligible to appear for placement 

              through the placement services of the Institution (Salaryfy*) 

            </li> 

            <li> 

              L.You hereby agree to accept job offers and to relocate for the 

              purposes of a job secured either through the placement-related 

              services of the Institution (Salaryfy*) or through your own efforts. 

            </li> 

            <li> 

              M.You should actively take guidance from Your mentor from the 

              Institution (Salaryfy*) and from the placement services team of the 

              Institution (Salaryfy*) and You shall be bound to follow their 

              recommendations including in making applications for such jobs that 

              are appropriate for You as decided by the Institution (Salaryfy*). 

            </li> 

            <li> 

              N.When making applications for a job, the Institution (Salaryfy*) 

              shall apply for roles that are suited to Your level of experience and 

              areas of expertise and as will be determined by the Institution 

              (Salaryfy*) and You shall also maintain realistic expectations about 

              the nature and kind of job that You are likely to be offered in the 

              respected domain of training you pursued in the Institution 

              (Salaryfy*). 

            </li> 

            <li> 

              O.You must respond to placement-related communications from 

              representatives of the Institution (Salaryfy*) within 24-48 hours by 

              email or on call. 

            </li> 

            <li> 

              P.You must always act reasonably and take all necessary efforts in 

              good faith efforts to secure a job. 

            </li> 

            <li> 

              Q.If You do not attend the interviews for the placements offered by 

              the Institution (Salaryfy*) for a period of 2 weeks from the 

              Certification Date, the Institution (Salaryfy*) is not obliged to 

              secure a placement for You. 

            </li> 

            <li> 

              R.You are obliged to pay the Income share six months before post 

              certificate completion date even if You do not communicate with the 

              placement team of the Institution (Salaryfy*) consistently throughout 

              Your search for a job and do not notify/inform the Institution 

              (Salaryfy*) of any of the offers that You have received otherwise. 

            </li> 

            <li> 

              S. The Institution (Salaryfy*) is not obliged to secure a placement 

              for You if You do not follow through with the interview process in a 

              timely and professional manner, including but not limited to, not 

              participating as expected by the employer in the interview process by 

              providing responses to employer communications, not showing up on time 

              for interviews and not providing documents or not following up as 

              expected by employers. But the Institution (Salaryfy*) shall be 

              entitled to take necessary steps for recovery of the amount due. 

            </li> 

            <li> 

              T.The Institution (Salaryfy*) shall also be entitled to sweep from 

              Your designated bank account the amounts payable by You to the 

              Institution (Salaryfy*) in the case explained in Clauses 5.(N) / 

              5.(O)./ 5.(P). 

            </li> 

          </ul></HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="MAKING PAYMENTS FROM EARNED INCOME"> 

          <div> 

            A.Once Your Earned Income Growth, either on account of securing a job or 

            a change in job or on account of an increment granted to You by an 

            Employer, exceeds the initial CTC at any time during a period of 1 (one) 

            year from the Certification Date, the Payment Term will commence and You 

            shall be liable to pay to the Institution (Salaryfy*) the Monthly 

            Payments. Such payment to the Institution (Salaryfy*) shall be made on 

            or before the such day of each calendar month as stipulated in the 

            Agreement (“Payment Due-Date”). 

          </div> 

          <div> 

            B.In the event of the termination of Your employment or if Your income 

            falls below the initial CTC Your obligations to make the Monthly 

            Payments to the Institution (Salaryfy*) from your own income shall still 

            be continued on the same amount. 

          </div> 

          <div> 

            C.If your employment is once terminated within one month, the 

            Institution (Salaryfy*) shall, on a best-effort basis, attempt to secure 

            You a new employment. It is however clarified that there should be no 

            obligation on the Institution (Salaryfy*) to secure a new employment 

            offer for You. But You are obligated to make ISA threshold payment to 

            the Institution (Salaryfy*)/ NBFC/Credit Card/ Bank from your own income 

            shall still be continued on the same amount till you complete your 

            payment term. 

          </div> 

          <div> 

            D.Default in payment of the Monthly Payments – in the event of a delay 

            in making payment of the Monthly Payment, of more than 30 (thirty) days 

            beyond the Payment Due Date (“Payment Default”), the Institution 

            (Salaryfy*) shall be entitled to initiate legal actions for recovery of 

            the amounts due and payable to the Institution (Salaryfy*). 

          </div> 

          <div> 

            E.Further, on account of Payment Default, You will be liable to pay such 

            additional amounts and/or default charges as set out in the Agreement. 

            The Institution (Salaryfy*) may, at its discretion, initiate appropriate 

            legal proceedings for recovery of the amounts due and payable under the 

            Agreement. The Institution (Salaryfy*) shall also be entitled to sweep 

            from your designated bank account the amounts payable by You to the 

            Institution (Salaryfy*). 

          </div> 

          <div> 

            F.Student Exit Policy: (Voluntarily) 

            <ul> 

              <li> 

                The student may also opt out of the 100% Employment Guarantee 

                Program if he: willingly quits the program within 7 days of the 

                batch's start date. 

              </li> 

              <li> 

                However, if You decide to drop off / Withdraw anytime after one week 

                of the Course Training and the Placement Process, You shall pay to 

                the Institution (Salaryfy*): 

                <table className="table-autob border-collapse border border-slate-400 "> 

                  <thead> 

                    <tr> 

                      <th className="border border-black-300"> 

                        Withdrawal Fee (Obligatory) 

                      </th> 

                      <th>Terms and Conditions</th> 

                    </tr> 

                  </thead> 

                  <tbody className="border-collapse border border-slate-400"> 

                    <tr> 

                      <td>Rs.5000</td> <td>during or after the 1st Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.10000</td> <td>during or after the 2nd Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.15000</td> <td>during or after the 3rd Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.Rs.20000</td> <td>during or after the 4th Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.25000</td> <td>during or after the 5th Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.30000</td> <td>during or after the 6th Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.35000</td> <td>during or after the 7th Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.Rs.40000</td> <td>during or after the 8th Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.45000</td> <td>during or after the 9th Term</td> 

                    </tr> 

                    <tr> 

                      <td>Rs.Rs.50000</td> <td>during or after the 10th Term</td> 

                    </tr> 

                  </tbody> 

                </table> 

              </li> 

              <li> 

                Though for the above-stated conditions, the student is eligible to 

                receive a NASSCOM Certificate after completing the first 5 TERMS by 

                paying an amount of Rs. 1000 to the Institute; nevertheless, the 

                security amount will not be repaid to the students in any of the 

                conditions indicated above. 

              </li> 

            </ul> 

          </div> 

          <div> 

            G. Student Exit Policy: (Performance Based): The student may also opt 

            out of the 100% Employment Guarantee Program if he is unable to satisfy 

            any of these conditions: 

          </div> 

          <div> 

            Even after two attempts, the student is unable to achieve a score of 

            more than 75% on any of the Terminal exams. 

          </div> 

          <div> 

            In addition, for a fee of Rs.1000, the student can obtain a NASSCOM 

            Certificate for the specific term. 

          </div> 

          <div> 

            However, in any of the instances stated above, the security deposit will 

            not be reimbursed to the students. 

          </div> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="6. Reporting of all Earned Income:"> 

          <p> 

            Upon completion of Your Training and throughout the Payment Term, You agree to communicate: 

          </p> 

          <ol>Your Earned Income </ol> 

          <ol> 

            All employment positions You accept including, if requested, a description of the business and products or services provided by each Employer and the nature of Your position with each Employer; 

          </ol> 

          <ol>Your projected annual gross Earned Income; and </ol> 

          <ol>Any changes in employment. </ol> 

          <ol> 

            You further agree during the Payment Term to update any changes in Your Earned Income within thirty (30) days of any event giving rise to such Change. 

          </ol> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="7. Deposit of all Earned Income into Bank Account:"> 

          <p> 

            A. You agree that during the entire Payment Term, You shall deposit all Earned Income received by You from any and all sources directly into Your Bank Account. 

          </p> 

          <p> 

            B. If You are employed, You agree to cause Your Employer to arrange for the direct deposit of all of Your Earned Income to Your Bank Account. Your refusal or failure to establish the Bank Account for the purpose of making Monthly Payments or other payments hereunder shall not relieve You of any of Your obligations under this Agreement. 

          </p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="8.Survival of Obligations:"> 

          Expiration of the Payment Term only terminates Your obligation to make Monthly Payments from Earned Income. However, it does not terminate this ISA or any continuing obligations You may have to the Institution (Salaryfy*) to this Agreement, including but not limited to the obligation to make an additional payment if the Institution (Salaryfy*) determines that You underreported Your Earned Income. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="9.RECONCILIATION:"> 

          From time to time during the Payment Term, and for a period of one year following the end of the calendar year in which the Payment Term expires, Institution (Salaryfy*) shall have the right to examine and audit Your records about Your employment and to verify your Earned Income at any point to ensure that You have properly reported or projected Your Earned Income and to verify that the Institution (Salaryfy*) has properly calculated the Monthly Payments due and payable under this Agreement (“Reconciliation”). You agree to cooperate with the Institution (Salaryfy*) in the Reconciliation process. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="10.Confirmation of Earned Income and Employment:"> 

          To permit the Institution (Salaryfy*) to perform Reconciliation, You agree that You shall, within thirty (30) days of a request by the Institution (Salaryfy*) provide the Institution (Salaryfy*) with the name, address, and phone number of any Employers from which You have received Earned Income and authorise each of Your Employers to disclose to the Institution (Salaryfy*) all forms of cash and non-cash compensation paid or provided to or earned by You and provide such other documentation (including Your salary slips, a summary of any non-written or oral non-cash consideration, equity or deferred compensation arrangements) as may be reasonably requested by the Institution (Salaryfy*) for the purpose of performing the Reconciliation. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="11.Under-reported Earned Income:"> 

          <p>A. If at any time during the Payment Term or pursuant to Reconciliation, whether intentionally or unintentionally, You under-report Your Earned Income, resulting in a lower amount of Monthly Payment being made to the Institution (Salaryfy*), Institution (Salaryfy*) will have the right to revise the Monthly Payment, in its discretion, by increasing Your Income Share as the new CTC.</p> 

          <p>B. Alternatively, if a Reconciliation shows that You underreported Your Earned Income at any time during the Payment Term so that You made one or lower Monthly Payments than Institution (Salaryfy*) is entitled to receive under this Agreement, Institution (Salaryfy*) shall give You notice within 15 (fifteen) days of completion of the Reconciliation of the amount of the underpayment and reasonable documentation of the underpayment calculation. You agree to pay the Institution (Salaryfy*) the aggregate amount of the underpayment within thirty (30) days of receiving such notice. The Institution (Salaryfy*) shall also be entitled to sweep from your designated bank account the amounts payable by You pursuant to this Clause.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="12.PREPAYMENT AMOUNT:"> 

          You may at any time pay in full Your obligation to the Institution (Salaryfy*) by paying an amount equal to the Prepayment Amount which is a fixed percentage of your CTC. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="13. ADDITIONAL PROVISIONS AFFECTING PAYMENTS:"> 

          <p>A. International Work - If You move out of India during Your Payment Term, You agree to continue to report Earned Income and to continue paying Your Income Share of Earned Income during the Payment Terms. You shall not be in breach of this Agreement so long as You continue to make the required Monthly Payments pursuant to the terms of this Agreement.</p> 

          <p>B. Waiver of ISA Due to Death or Total Disability: We will waive what You owe under this Agreement, including any past due amounts and fees, in the case of any unfortunate event leading to death or permanent total disability; if You would like to assert a waiver based on disability, You will need to provide documentation showing that You have been found to be permanently disabled by the state agency due to a condition that began or deteriorated after the Effective Date.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="14.CODE OF CONDUCT FOR THE STUDENTS:"> 

          <p>By entering into this Agreement, You represent, warrant, and promise to the Institution (Salaryfy*)</p> 

          <p>A. That You are entering into this Agreement in good faith and with the intention to pay the Institution (Salaryfy*) by making Monthly Payments or the Course Fee payment when due;</p> 

          <p>B. That all the information You have provided to Institution (Salaryfy*) in connection with entering into this Agreement is true and accurate and that You have not provided any false, misleading, or deceptive statements or omissions of fact;</p> 

          <p>C. That you agree to abide by the rules and guidelines laid by the Institution (Salaryfy*).</p> 

          <p>D. That you maintain a steady attendance rate of at least 80% in all of the TERMs.</p> 

          <p>E. That you secure a score of at least 75% to qualify for any TERM (within 2 attempts).</p> 

          <p>F. That you abide by the Job Guarantee Criteria stated above in Clause 4(H).</p> 

          <p>G. That you abide by the Student Exit Policies (Voluntarily and Performance-based) stated above in clauses 4(H) and 4(G) respectively.</p> 

          <p>H. That You are an Indian citizen or a permanent resident and have the legal right to work in India;</p> 

          <p>I. That You will make reasonable and good faith efforts to seek employment immediately following completion of the Training and during all times during the Payment Term that You are not employed.</p> 

          <p>J. That You will timely and fully provide all information and documentation required under the terms of this Agreement or as reasonably requested by Institution (Salaryfy*) (including any assignee of Institution (Salaryfy*)) and that such information or documentation shall be true, complete, and accurate;</p> 

          <p>K. That You shall keep accurate records relating to Your Earned Income for each year of Your Payment Term, including any invoices or payments relating to self-employment services You provide; and You will retain all such records for a period of at least one (1) year following the date You fulfill all Your payment obligations under this Agreement.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="15. TERM:"> 

          This Agreement shall be effective from the Execution Date and shall be valid and binding till an amount equal to the Income Share has been repaid by You in the manner as set out in this Agreement. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="16. BREACH AND REMEDIES:"> 

          <p>A. Upon breach by You of this Agreement, the Institution (Salaryfy*) shall be entitled to</p> 

          <ol> 

            <li>collect the amounts due and payable by You under this Agreement;</li> 

            <li>enforce all legal rights and remedies in the collection of such amount and related fees (including any rights available to Institution (Salaryfy*) to garnish wages or set off any tax refund and to sweep from your designated bank account the amounts payable by You to the Institution (Salaryfy*)); or</li> 

            <li>utilize any combination of these remedies. </li> 

          </ol> 

          <p>B. You agree to pay the Institution (Salaryfy*)’s costs incurred by the Institution (Salaryfy*) for recovery of the amounts due and payable by You under this Agreement.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="17. GENERAL PROVISIONS:"> 

          <p>A. This Agreement sets forth the entire agreement and understanding of the Parties relating to the subject matter herein and supersedes all prior or contemporaneous discussions, understandings, and agreements, whether oral or written, between You and the Institution (Salaryfy*) relating to the subject matter hereof.</p> 

          <p>B. No delay or failure on the part of either Party to require the performance of any provision of this Agreement shall constitute a waiver of that provision as to that or any other instance.</p> 

          <p>C. The laws under the Govt. of India will govern all the adversarial proceedings arising out of this agreement, your Institution (Salaryfy*), or your payments to Institution (Salaryfy*).</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="18. DISPUTES:"> 

          As the exclusive means of initiating adversarial proceedings to resolve any dispute arising out of this agreement, or any proceeding commenced by either party seeking an injunction, a restraining order, or any other equitable remedy or a proceeding commenced by either party in small claims court either party may demand that the dispute be resolved by binding arbitration administered by the Indian Judicial System. 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="19.COMMUNICATIONS:"> 

          <p>A. For any reason related to this agreement, including any amounts you owe, Institution (Salaryfy*) may contact you at any physical or electronic addresses or numbers (including wireless cellular telephone numbers, VOIP, or other services) you have provided Institution (Salaryfy*) or provide Institution (Salaryfy*) in the future.</p> 

          <p>B. Institution (Salaryfy*) may use any means of communication, including postal mail, electronic mail, voice calls, text messaging, and recorded message using automatic-dialling devices. You will ask that Institution (Salaryfy*) not contact you using one or more of these means of contacting you.</p> 

          <p>C. You must notify Institution (Salaryfy*) no later than 15 days after a change in your primary residence, your phone number, email address, or any other contact information you previously provided the Institution (Salaryfy*).</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="20.CONFIDENTIALITY:"> 

 

          <p>A. You agree and understand that as part of the Course, the Institution (Salaryfy*) will make available to You various course materials including by way of the online course, assessment material, study modules, and various other information/documents (“Confidential Information”).</p> 

          <p>B. You agree to treat as confidential the Confidential Information and shall not during the duration of the Course and for a period of 3 years from the Course Completion Date disclose any such Confidential Information to any person, firm, corporation, association, or other entity for any reason or purpose whatsoever.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="21. VERIFICATION OF REVIEW AND INDEPENDENT DECISION TO ENTER INTO ISA:"> 

 

          <p>By signing below, You acknowledge and agree:</p> 

          <p>A. That this Agreement is entered into voluntarily and as an arms-length transaction.</p> 

          <p>B. That You are of legal age to execute this Agreement; </p> 

          <p>C. That You have had the opportunity to read this Agreement and to review its terms and conditions with Your legal and financial advisors of Your choosing;</p> 

          <p>D. That the Institution (Salaryfy*) is not an agent or fiduciary or advisor acting for Your benefit or in Your favor in connection with the execution of this Agreement;</p> 

          <p>E. That Institution (Salaryfy*) has not provided You with any legal, accounting, investment, regulatory or tax advice with respect to this Agreement;</p> 

          <p>F. that Institution (Salaryfy*) has not made any promises or assurances to You that are not expressly set forth in writing in this Agreement.</p> 

          <p>G. You understand that, by entering into this Agreement, You are irrevocably agreeing to share a fixed portion of Your future Earned Income in consideration of receiving the Training / Placement, in accordance with the terms and conditions of this Agreement.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Student Consent Form:"> 

          <p>I will give 80% or more attendance during the course duration which isto deliver online.</p> 

          <p>I will never indulge in any kind of unethical practice (Sharing code etc.)</p> 

          <p>I am ready to adhere to course timings for full-time.</p> 

          <p>I plan to work full-time immediately after completing the course.</p> 

          <p>I have a laptop and have access to a stable WiFi connection.</p> 

          <p>I have a savings bank account.</p> 

          <p>I have access to internet banking.</p> 

          <p>My CIBIL (Credit Score) is ablove 650.</p> 

          <p>I have read and understood the Salaryfy program.</p> 

          <p>I have read and understood the Salaryfy Code of Conduct.</p> 

          <p>I have and understood the Income Sharing Agreement (ISA).</p> 

          <p>I understand after successfully completing all the TERMS with a score above than 75% and availing a job, I will pay 12% from the annual package to the institution as the ISA amount.</p> 

          <p>I understand that if I successfully complete all the TERMS with a score below 75%, I will pay 10% from the annual package to the institution as the ISA amount.</p> 

          <p>I understand that if I successfully complete all the TERMS with a scorebelow 75%, I will pay 10% from the annual package to the institution asthe ISA amount.</p> 

          <p>I understand that in case I avail a job by myself / a vendor/third-party/ through college within the 6 months from the coursecompletion , I will still be liable to pay 10% of my annual package tothe institution.</p> 

          <p>I am aware that the documents collected are for verification purposes and</p> 

          <p>I authorize Data Folkz to keep my KYC related documents with NBFC partners to process my application.</p> 

          <p>I am responsible to any Forgery or falsification of any document is a serious offence under Section 465 of the Indian Penal Code of 1860.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Candidate Consent Form"> 

          <SubHeading>Instant Placement Services</SubHeading> 

          <p>This Candidate Consent Form (hereinafter referred to as “the Form”) is entered into by and between Salaryfy (hereinafter referred to as “the Company”) and the Job Seeker (hereinafter referred to as “Candidate/ User”).</p> 

          <p>1. Definitions As Per This Declaration</p> 

          <li>“Annual Income or CTC” refers to the total of the fixed salary (+) the variable pay (+) the employment benefits (+) compensation (if any). </li> 

          <li>"Employer" refers to any individual or organization for whom the User provides services, whether as an employee, independent contractor or in any other capacity. </li> 

          <li>“Service Fee” refers to the fixed 1% of the Annual income or CTC which is non-refundable and non-transferable in nature.</li> 

          <li> “Restitution Fee” refers to a fixed amount of Rs. 5000 which is meant to incur any losses on the part of the Candidate which is non-refundable and non-transferable in nature.</li> 

          <li>“Date of enrolment” refers to the date on which the candidate has opted for and signed the consent form.</li> 

          <p>2. According to the Instant Placement services, the company agrees to provide a new job within 60 days after enrolment, either directly or through a third party.</p> 

          <p>3. The Company is fully authorized to charge a service fee equal to afixed 1% of the CTC in exchange for providing new employment to theUser.</p> 

          <p>4. The Candidate must pay the Service Fee to the company after receiving the offer letter but before receiving the appointment letter.</p> 

          <p>5. If the candidate has not submitted the service fee before receiving the appointment letter, the appointment letter will be postponed until the candidate submits the service fee (maximum up to 10 days).</p> 

          <p>6. If the candidate fails to pay the service fee within 10 days of receiving the offer letter, the company may revoke the appointment letter. As a result, in such a case, the company is not obligated to make another employment offer to the candidate. And the candidate is obligated to pay the Restitution Fee.</p> 

          <p>8. The candidate must be eligible to work in India legally and be either an Indian national or a permanent resident. The applicant must also agree to accept job offers and relocate (anywhere in India or Outside).</p> 

          <p>9. After being hired, the candidates agree to work full-time (directly or indirectly). If the candidate leaves the new job within six months of being hired, the employer has the entire authority to blacklist the candidate for future employment.</p> 

          <p>10. The Company shall seek roles that are appropriate for the candidate's level of experience and areas of expertise, and the candidate shall keep realistic expectations about the nature and kind of job that is likely to be offered in the respected domain, with no minimum wage increase restrictions.</p> 

          <p>11. The candidate must reply to any communications from Company representatives through email or on-call within 24-48 hours and must always act fairly and make all necessary efforts in good faith to get employment..</p> 

          <p>12. The Company will make at least three job offers to the candidate, and the candidate must accept one of them within 60 days of enrollment. If a candidate declines all job offers without a valid reason, the company is not obliged to recruit you. Nonetheless, the candidate is obligated to pay the Restitution Fee to the company within 7 days.</p> 

          <p>13. The Company shall not be obligated to secure employment for the candidate if he/she fails to follow through with the interview process in a timely and professional manner, including but not limited to, failing to participate as expected by the employer in the interview process by responding to employer communications, failing to show up on time for interviews and failing to provide documents, or failing to follow up as expected by employers. However, the Company will be eligible to collect the Restitution Fee from the candidate.</p> 

          <p>14. However, if the candidate decides to drop out / withdraw at any point throughout the Placement Process, the candidate will be required to pay the Restitution Fee to the Company.</p> 

          <p>15. In case a candidate has provided any false/ misleading/ deceptive information or documents omissions of facts, at any stage during the placement process, then the company is eligible to cancel the placement process and the candidate is liable to pay the Restitution Fee.</p> 

          <p>16. The Company is not obligated to provide the candidate with another employment offer if the Candidate decides to resign/abscond/ terminated from their job within six months of being placed. Additionally, in such circumstances, the employer may also choose to place the candidate on a blacklist.</p> 

          <p>17. The candidate must follow the Company's policies and procedures. The Company shall fully monitor and implement the conditions of this Declaration.</p> 

          <p>18. The candidate acknowledges that all adversarial processes arising out of this Declaration, your Company, or your payments to the Company will be governed by the laws of India.</p> 

          <p>19. The candidate is liable for any forgery or falsification of any document, which is a serious violation under Section 465 of the Indian Criminal Code of 1860.</p> 

          <p>20. The candidate agrees that any breach of the terms and conditions may result in the termination of his placement and the submission of the restitution fee.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Refund Policy"> 

          <SubHeading>Skill-Based Placement (Under Pay after Placement enrolment plan)</SubHeading> 

          <p>Thank you for considering our pay after placement enrolment plan under Skill Placement. We are pleased to offer this opportunity to help students acquire the skills they need to succeed in their chosen fields. To ensure that we can continue to provide this service, we have established a no-refund policy. Please read this policy carefully before enrolling in our program.</p> 

          <p>Pay After Placement Enrolment Plan: Our pay after placement enrolment plan allows students to enroll in our program without paying any upfront fees. Instead, they pay a percentage of their annual salary after they have been placed in a job that meets certain criteria. This ensures that our interests are aligned with the students and that we are motivated to help them succeed.</p> 

          <p>Skill Placement: Our program focuses on providing students with the skills they need to succeed in their chosen field. We work with leading employers to ensure that our curriculum is aligned with industry standards and that our students are well-prepared for the job market. However, we do guarantee job placement, but it ultimately depends on the student's performance and the employer's hiring needs.</p> 

          <p>No-Refund Policy: Our no-refund policy applies to all students enrolled in our pay after placement enrolment plan for Skill Placement. Once a student has enrolled, they are committing to paying a percentage of their annual salary after they have been placed in a job that meets certain criteria. This commitment is not refundable and non-negotiable.</p> 

          <p> 

            Job Placement Criteria: To be eligible for our pay after placement enrolment plan, students must meet certain criteria related to job placement. These criteria are as follows: 

            <li>In all of his TERMS, the student must consistently maintain an attendance record of higher than 80%.</li> 

            <li>The student is required to complete all of the assignments and online exercises that are listed in the course syllabus.</li> 

            <li>The student must receive a score of at least 75% on each of the terminal exams.</li> 

            <li>The course completion exam must be passed with a score of at least 75%.</li> 

            <li>Also, in each of the terminal exams, if the student receives a score of less than 75% even after two attempts, they will be given the opportunity to retake the exam by paying the institution Rs. 3,000 as a restitution charge (Non-Refundable).</li> 

            <li>The student might also choose to receive the NASSCOM Certificate for the specific term by paying the institution an Rs. 1000 amount. However, in any of the aforementioned scenarios, the security deposit will not be refunded to the students.</li> 

          </p> 

          <p>Placement Period: The length of the placement period may vary depending on the program and the student's individual circumstances, but is usually 45 days after completing the course.. However, regardless of the length of the placement period, the commitment to pay a percentage of their salary is not refundable and non-negotiable.</p> 

          <p>Student Responsibilities: To ensure that our program is effective, students must meet certain responsibilities, such as attending classes, completing assignments, and actively seeking job placement opportunities. The detailed responsibilities of a student is elaborated in the clause 3 & 14 of ISA. If a student does not meet any of these responsibilities, they may not be eligible for job placement or may be required to pay a higher percentage of their annual salary.</p> 

          <p>Change of Circumstances: We understand that circumstances can change, and we will do our best to accommodate students in these situations. However, we cannot guarantee that we will be able to provide refunds or make exceptions to our no-refund policy.</p> 

          <p>We believe that our pay-after-placement enrolment plan under skill-based placement offers an innovative approach to higher education that benefits both students and employers. Our no-refund policy is designed to ensure that we can continue to provide this service and maintain our commitment to excellence. If you have any questions about our policy or enrolment plan, please do not hesitate to contact us.</p> 

 

          <SubHeading>Skill-Based Placement (Under Premium enrolment plan)</SubHeading> 

          <p>Premium Enrolment Plan: Our premium enrolment plan offers students a comprehensive package that includes access to additional resources, personalized live classes, dedicated mentorship, committed student support, and focused career counseling services. This plan is designed for students who are looking for an extra edge in their job search and want to take advantage of all the resources available to them.</p> 

          <p>Skill-Based Placement: Our program focuses on providing students with the skills they need to succeed in their chosen field. We work with leading employers to ensure that our curriculum is aligned with industry standards and that our students are well-prepared for the job market. We also provide personalized mentorship and career counseling services to help students achieve their career goals.</p> 

          <p>7-Day Refund Policy: Our 7-day refund policy applies to all students enrolled in our premium enrolment plan under Skill-Based Placement. If you are not satisfied with our program for any valid reason, you may request a refund within 7 days of the start date of your enrolment.</p> 

          <p>Refund Process: To request a refund, please contact our customer service team by phone or email within 7 days of the start date of your enrolment. We will ask for your reason for canceling and may request additional information to help us improve our program. Once we have confirmed your eligibility for a refund, we will process your refund within 14 business days.</p> 

          <p>Eligibility for Refund: To be eligible for a refund, you must have paid the full amount for the premium enrolment plan and canceled within 7 days of the start date of your enrolment. If you have used any of the services included in the plan, such as personalized mentorship or career counseling, we may prorate the refund amount based on the services used.</p> 

          <p>Non-Refundable Fees: Certain fees associated with the premium enrolment plan may be non-refundable. For example, if you have already received access to course materials or other resources, we may deduct the cost of those materials from your refund.</p> 

          <p>Future Enrolment: If you choose to cancel your enrolment and receive a refund, you will not be eligible for future enrolment in our premium enrolment plan for Skill-Based Placement. However, you may still be eligible for other programs or services offered by our organization. We believe that our premium enrolment plan for Skill-Based Placement offers a unique and valuable opportunity for students to develop their skills and achieve their career goals. We are committed to providing the highest quality education and support services to our students. Our 7-day refund policy is designed to provide you with the flexibility and peace of mind you need to make the most of your education. If you have any questions about our policy or enrolment plan, please do not hesitate to contact us.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Educational Partners and Accreditation"> 

          <p>At Salaryfy, we understand the importance of accreditation in ensuring that our students receive the highest quality education. That's why we have partnered with leading accreditation bodies to ensure that our programs meet the highest standards of quality and relevance.</p> 

          <p>In partnership with NASSCOM, Salaryfy offers a course completion certificate for our students who successfully complete our programs. NASSCOM, or the National Association of Software and Services Companies, is India's premier trade association for the IT and BPO industries. NASSCOM represents over 2,000 member companies, including global leaders such as IBM, Microsoft, and Google.</p> 

          <p>The NASSCOM course completion certificate is a valuable credential that demonstrates to employers that a student has successfully completed a rigorous program of study that is aligned with industry standards. The certificate is widely recognized by employers in India and around the world, making it a valuable asset for students who are looking to advance their careers.</p> 

          <p>Our NASSCOM-certified programs cover a wide range of topics, including software development, data analytics, business analytics, full-stack developer, project management, and more. Our curriculum is designed to provide students with the knowledge and skills they need to succeed in their chosen fields. We work with leading industry experts to develop our curriculum, ensuring that our programs are up-to-date and relevant to the needs of the job market.</p> 

          <p>The NASSCOM course completion certificate is a valuable credential that can help our students stand out in the job market and advance their careers. We are proud to offer this certificate to our students, and we look forward to continuing to provide them with the best possible education and support.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Education Research"> 

          <p>At Salaryfy, we believe that education is the key to unlocking the potential of every individual. That's why we have conducted extensive research on the job market to ensure that our students are well-prepared for the job market and have access to the best employment opportunities. Our research has focused on a range of topics, including industry trends, the employer needs, and job market demands.</p> 

          <SubHeading>Industry Trends</SubHeading> 

          <p> One of the key areas of our research is industry trends. We closely monitor developments in various industries to identify emerging trends and changes in the job market. We analyze data from industry reports, labor market surveys, and other sources to identify areas of growth and potential job opportunities.</p> 

          <p> We also analyze data on the skills and qualifications that are in high demand in different industries. This helps us develop our curriculum and ensure that our students are well-prepared for the job market. For example, if we see a growing demand for data analytics skills in the healthcare industry, we may introduce a course in healthcare data analytics to meet this demand.</p> 

          <SubHeading>Employer Needs</SubHeading> 

          <p> Another area of our research is employer needs. We work closely with employers to understand their needs and identify areas where we can provide value. We conduct surveys and interviews with employers to understand the skills and qualifications they are looking for in candidates, as well as the challenges they face in hiring and retaining top talent.</p> 

          <p> Based on this research, we develop our curriculum to ensure that our students are well-prepared to meet the needs of employers. For example, if we see that employers are looking for candidates with strong communication skills, we may introduce a course in business communication to help our students develop these skills.</p> 

          <SubHeading>Job Market Demands</SubHeading> 

          <p> We also analyze data on job market demands to identify areas where there is a shortage of skilled workers. We look at data on job postings, employment trends, and other indicators to identify areas of growth and potential job opportunities. This helps us develop our curriculum and ensure that our students are well-positioned to take advantage of these opportunities.</p> 

          <p>For example, if we see that there is a growing demand for cybersecurity professionals, we may introduce a course in cybersecurity to meet this demand. We also work with employers in this field to ensure that our curriculum is aligned with industry standards and that our students are well-prepared for the job market.</p> 

          <SubHeading>Placement Opportunities</SubHeading> 

          <h3></h3> 

          <p>At Salaryfy, our ultimate goal is to place our students in jobs that are well-suited to their skills and interests. We work closely with employers to identify job opportunities and match them with our students. Our research on industry trends, employer needs, and job market demands helps us identify the best placement opportunities for our students. </p> <p> We also provide career counseling and support services to help our students navigate the job market and secure employment. Our team of career counselors works with each student to identify their career goals and develop a personalized job search strategy. We also provide resume and interview preparation services to help our students present themselves in the best possible light to potential employers. </p> 

          <SubHeading>Conclusion</SubHeading> 

           <h5></h5>  

           <p> At Salaryfy, our research on the job market is a key component of our approach to education and placement. We believe that by closely monitoring industry trends, employer needs, and job market demands, we can provide our students with the best possible education and placement opportunities. Our goal is to help our students succeed in their careers and achieve their full potential. We are committed to continuing our research and developing new ways to support our students in the pursuit of their career goals. </p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

      <HeadingAndInfo heading="Intellectual Property Rights"> 

        <p> Intellectual Property Rights (IPR) are legal rights that protect the creations of the human intellect. These creations can be in the form of literary, artistic, musical, or any other form of creative work. The purpose of IPR is to protect the creator's rights to their work and prevent unauthorized use, copying, or distribution. </p> <p> For Salaryfy, a company that provides job growth opportunities and courses for skill placement, IPR is a crucial aspect of its operations. This is because Salaryfy creates and distributes original content and courses for its users. Therefore, IPR laws are necessary to protect Salaryfy's proprietary content and prevent competitors from copying or stealing its intellectual property. </p> <p> There are several types of IPR that apply to Salaryfy, including patents, trademarks, copyrights, and trade secrets. Each of these provides different forms of protection, and it is essential for Salaryfy to understand and use them appropriately to safeguard its intellectual property. </p> <p> Patents are legal rights granted to inventors that protect their inventions from being copied, sold, or used without permission. For Salaryfy, this could mean patenting its proprietary software or technology used in creating its courses. By obtaining patents, Salaryfy can prevent others from using or copying its technology, thereby securing its competitive advantage. </p> <p> Trademarks are symbols, logos, or designs that identify and distinguish a company's products or services from those of others. For Salaryfy, trademarks are essential in protecting its brand and reputation. Salaryfy's logo and name are its trademarks, and it is essential to register them to prevent others from using them without permission. </p> <p> Copyrights are legal rights that protect original works of authorship, including literary, artistic, and musical works. For Salaryfy, this could include the courses, e-books, and other materials it creates for its users. By obtaining copyrights, Salaryfy can prevent others from reproducing or distributing its content without permission. </p> <p> Trade Secrets are confidential information that provides a company with a competitive advantage. For Salaryfy, this could include the technology, processes, or strategies used in creating and delivering its courses. By keeping this information confidential, Salaryfy can prevent competitors from gaining an advantage or stealing its intellectual property. </p> <p> In addition to protecting its intellectual property, Salaryfy must also respect the intellectual property of others. This means that it must not infringe on the patents, trademarks, copyrights, or trade secrets of other companies. Failure to respect IPR can result in legal action, damages, and reputational harm. </p> <p> One way Salaryfy can ensure that it respects IPR is by conducting thorough research before creating and distributing its courses. This includes checking if there are any existing patents or copyrights that could be infringed upon. Additionally, Salaryfy should ensure that it obtains the necessary licenses or permissions to use any third-party content, such as images or music. </p> <p> Another way Salaryfy can respect IPR is by providing proper attribution to any third-party content used in its courses. This includes providing the author's name and copyright information in the course materials. By giving proper credit, Salaryfy can avoid claims of copyright infringement and maintain its reputation as a responsible and ethical company. </p> <p> In conclusion, IPR is an essential aspect of Salaryfy's operations. By protecting its intellectual property, Salaryfy can secure its competitive advantage and prevent others from copying or stealing its proprietary content. Additionally, by respecting the intellectual property of others, Salaryfy can maintain its reputation as an ethical and responsible company. </p>   

        </HeadingAndInfo> 

        </TermsBlock> 

        <TermsBlock> 

        <HeadingAndInfo heading="Third-Party Intellectual Property"> 

        <p> Third-party intellectual property rights refer to the intellectual property owned by others and used by a company like Salaryfy in its operations. Third-party intellectual property rights can include patents, trademarks, copyrights, trade secrets, and other proprietary information. As a company that provides job growth opportunities and courses for skill placement, Salaryfy must be aware of third-party intellectual property rights and take steps to ensure that it does not infringe on them. </p> <p> When creating and distributing its courses, Salaryfy may need to use third-party intellectual property, such as images, music, or videos. It is essential for Salaryfy to obtain the necessary licenses or permissions to use this content to avoid infringing on third-party intellectual property rights. </p>  

        <SubHeading>Patents</SubHeading> 

        <p></p>  

        <p> Patents are legal rights granted to inventors that protect their inventions from being copied, sold, or used without permission. For Salaryfy, this could mean using patented technology owned by others in its courses. To avoid infringing on third-party patents, Salaryfy should conduct thorough research before using any technology in its courses. This includes checking if there are any existing patents that could be infringed upon and obtaining the necessary licenses or permissions to use patented technology. </p> 

        <SubHeading>Trademarks</SubHeading> 

         <p></p>  

        <p> Trademarks are symbols, logos, or designs that identify and distinguish a company's products or services from those of others. For Salaryfy, this could mean using third-party trademarks in its courses or marketing materials. To avoid infringing on third-party trademarks, Salaryfy should conduct a trademark search to determine if the trademark is available for use. If the trademark is already registered, Salaryfy should obtain the necessary permissions or licenses to use the trademark. </p>   

       <SubHeading>Copyrights</SubHeading> 

        <p> Copyrights are legal rights that protect original works of authorship, including literary, artistic, and musical works. For Salaryfy, this could mean using third-party content, such as images, music, or videos, in its courses. To avoid infringing on third-party copyrights, Salaryfy should obtain the necessary licenses or permissions to use the content. Additionally, Salaryfy should give proper attribution to the author or copyright owner to avoid claims of copyright infringement. </p>   

       

      <SubHeading>Trade Secrets</SubHeading> 

        <p> Trade secrets are confidential information that provides a company with a competitive advantage. For Salaryfy, this could mean using third-party trade secrets in its courses or operations. To avoid infringing on third-party trade secrets, Salaryfy should conduct thorough research before using any confidential information. This includes checking if the information is protected by a non-disclosure agreement or other legal agreement and obtaining the necessary permissions or licenses to use the information. </p> <p> In addition to obtaining the necessary licenses or permissions to use third-party intellectual property, Salaryfy should also ensure that it complies with the terms and conditions of these agreements. For example, if Salaryfy obtains a license to use third-party content in its courses, it must ensure that it only uses the content for the specific purposes outlined in the license agreement. </p> <p> Salaryfy should also have policies and procedures in place to monitor its use of third-party intellectual property. This includes conducting regular audits to ensure that it is not infringing on any third-party intellectual property rights. If Salaryfy discovers that it has infringed on third-party intellectual property rights, it should take immediate steps to rectify the situation, such as removing the infringing content from its courses or obtaining the necessary permissions or licenses. </p> <p> In conclusion, third-party intellectual property rights are an essential consideration for Salaryfy. As a company that creates and distributes courses and content, Salaryfy must be aware of third-party intellectual property rights and take steps to ensure that it does not infringe on them. This includes obtaining the necessary licenses or permissions to use third-party intellectual property and ensuring compliance with the terms and conditions of these agreements. Additionally, Salaryfy should have policies and procedures in place to monitor its use of third-party intellectual property and take immediate action. </p> 

        </HeadingAndInfo>  

        </TermsBlock> 

        <TermsBlock> 

        <HeadingAndInfo heading="Limited License"> 

 

        <p> The limited license rights granted by Salaryfy are important for several reasons. First, they protect the company's intellectual property rights. By limiting the way in which users can use its products and services, Salaryfy ensures that its proprietary information and content are not misused or exploited. This helps to maintain the quality and integrity of the services that it provides. </p> <p> Second, limited license rights help to ensure that users get the best out of the services provided by Salaryfy. By setting guidelines on how its products and services can be used, the company ensures that its users receive the intended benefits. For instance, if Salaryfy provides courses on specific subjects, the limited license rights will ensure that the users use the courses for educational purposes only, and not for any other reason. </p> <p> Third, limited license rights also protect the users. By setting guidelines on how the products and services can be used, Salaryfy ensures that the users are not exposed to any risks or liabilities. For instance, if the company provides skill placement services, the limited license rights will ensure that the users use the services in a manner that does not expose them to any legal or financial liabilities. Salaryfy is an organization that values education, training, and development. To ensure that its users get the best out of the services that they offer, Salaryfy has established limited license rights that govern the use of its products and services. These limited license rights are important for protecting the company's intellectual property rights, ensuring that users get the intended benefits of the services provided, and protecting users from any risks or liabilities. It is therefore crucial for users to read and understand the limited license rights before using any of Salaryfy's products or services. </p>  

        </HeadingAndInfo> 

        </TermsBlock> 

        <TermsBlock> 

        <HeadingAndInfo heading="User Conduct Policy"> 

        <h3></h3> 

        <p> At Salaryfy, we are committed to providing our users with the best job growth opportunities, courses, and skill placement services. We strive to maintain a safe and inclusive platform for our users, and to ensure that our services are used in a responsible and ethical manner. To achieve this, we have established a code of conduct that outlines the expectations that we have for our users when they interact with our platform. This code of conduct is designed to promote a positive user experience and to protect the interests of all our users. </p> 

        <SubHeading>Respect and Courtesy</SubHeading> 

         <h5></h5>  

         <p> We expect all our users to treat each other with respect and courtesy at all times. This includes refraining from using abusive or offensive language, engaging in discriminatory behavior, or harassing other users in any way. We expect all our users to conduct themselves in a professional and ethical manner, and to refrain from any behavior that could be deemed as inappropriate or offensive. </p> 

         <SubHeading>Use of Services</SubHeading>  

         <h5></h5>  

         <p> We expect all our users to use our services in a responsible and ethical manner. This includes refraining from using our services for any illegal or unethical purposes, and from engaging in any activities that could harm other users or the platform itself. We also expect our users to comply with all relevant laws and regulations that apply to their use of our platform. </p>  

         <SubHeading>Confidentiality and Privacy</SubHeading>  

         <h5></h5> . 

         <p> We understand the importance of confidentiality and privacy, and we take these matters seriously. We expect all our users to respect the confidentiality and privacy of other users, and to refrain from sharing any personal or sensitive information about other users without their consent. We also expect our users to respect the confidentiality and privacy of our platform, and to refrain from disclosing any proprietary or confidential information about Salaryfy or its services. </p> <p> We expect all our users to respect the confidentiality and privacy of other users, and to refrain from sharing any personal or sensitive information about other users without their consent. We also expect our users to respect the confidentiality and privacy of our platform, and to refrain from disclosing any proprietary or confidential information about Salaryfy or its services. </p> 

         <SubHeading>Intellectual Property</SubHeading>   

         <h5></h5>  

         <p> We respect the intellectual property rights of others, and we expect our users to do the same. This includes respecting copyrights, trademarks, patents, and other forms of intellectual property. We expect our users to refrain from using any content or materials on our platform that infringe on the intellectual property rights of others, and to seek permission from the relevant owners before using any such content or materials. </p>  

         <SubHeading>Misconduct and Violations</SubHeading> 

         <h5></h5> 

          <p> We take any violations of our code of conduct seriously, and we reserve the right to take appropriate action against any users who engage in misconduct or violate our code of conduct. This may include suspension or termination of their account, as well as any other legal remedies that may be available to us. </p> <p> At Salaryfy, we are committed to providing our users with a safe and inclusive platform for job growth opportunities, courses, and skill placement services. We expect all our users to conduct themselves in a responsible and ethical manner, and to comply with our code of conduct at all times. By working together, we can create a positive and supportive community that promotes personal and professional growth for all our users. </p>  

        </HeadingAndInfo> 

         </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Platform Security"> 

        <h3></h3> 

        <p> At Salaryfy, we take the security of our platform very seriously. We understand that our users rely on our platform to access job growth opportunities, courses, and skill placement services, and we are committed to protecting their personal and sensitive information from unauthorized access, use, or disclosure. To achieve this, we have implemented a comprehensive security program that incorporates industry-standard security measures, policies, and procedures. </p>  

        <SubHeading>Data Protection and Privacy</SubHeading> 

        <h5></h5>  

        <p> We understand the importance of data protection and privacy, and we take every measure to ensure that our users' data is protected at all times. We have implemented strong security controls to safeguard our users' personal and sensitive information, including data encryption, firewalls, and intrusion detection systems. We also regularly review and update our privacy policy to ensure that it complies with relevant data protection laws and regulations, and to provide transparency about how we collect, use, and store our users' data. </p>  

        <SubHeading>Authentication and Authorization</SubHeading> 

        <h5></h5>  

        <p> We use authentication and authorization mechanisms to ensure that only authorized users have access to our platform and its resources. We require our users to create strong and unique passwords, and we use multi-factor authentication to provide an additional layer of security. We also use access controls to ensure that users only have access to the resources and information that they need to perform their job growth opportunities, courses, and skill placement activities. </p>  

        <SubHeading>Network and Infrastructure Security</SubHeading> 

        <h5></h5>  

        <p> We have implemented strong network and infrastructure security measures to protect our platform from unauthorized access and cyberattacks. We use firewalls, intrusion detection and prevention systems, and network segmentation to prevent unauthorized access to our platform. We also regularly monitor our network and infrastructure for any security threats or vulnerabilities, and we take immediate action to mitigate them. </p>  

        <SubHeading>Employee Security Awareness and Training</SubHeading> 

        <h5></h5>  

        <p> We understand that our employees play a critical role in ensuring the security of our platform. We provide regular security awareness and training programs to our employees to ensure that they understand the importance of security and the role that they play in protecting our platform. We also conduct background checks and require our employees to sign confidentiality agreements to ensure that they understand their responsibilities regarding the protection of our users' personal and sensitive information. </p>  

        <SubHeading>Incident Management and Response</SubHeading> 

        <h5></h5> 

         <p> Despite our best efforts, security incidents can still occur. In the event of a security incident, we have a comprehensive incident management and response program in place to ensure that we can respond quickly and effectively. We have designated incident response teams and procedures, and we regularly conduct incident response drills to ensure that we are prepared for any security incidents. </p> <p> At Salaryfy, we understand the importance of platform security for our users' job growth opportunities, courses, and skill placement activities. We are committed to maintaining the highest standards of security for our platform and its users, and we continuously monitor and improve our security program to ensure that we are providing the best possible protection for our users' personal and sensitive information. By working together, we can create a safe and secure environment that promotes personal and professional growth for all our users. </p>  

        </HeadingAndInfo>  

        </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Disclaimer"> 

         

        <p> At Salaryfy, we strive to provide accurate and reliable information to our users about job growth opportunities, courses, and skill placement services. However, we understand that there may be limitations to the accuracy and completeness of the information we provide. Therefore, we have a disclaimer to ensure that our users understand the limitations of the information we provide and to minimize any legal liability on our part. </p>  

        <SubHeading>Limitation of Liability</SubHeading> 

        <h5></h5>  

        <p> Our disclaimer states that we are not liable for any damages or losses that may arise from the use of our platform, including but not limited to damages or losses resulting from inaccurate or incomplete information, errors, omissions, or any other cause. We do not guarantee the accuracy, completeness, or reliability of the information we provide, and we cannot be held responsible for any decisions made based on this information. </p>  

        <SubHeading>Third-Party Content and Links</SubHeading> 

        <h5></h5>  

        <p> Our platform may include content and links to third-party websites and resources. Our disclaimer states that we are not responsible for the accuracy, completeness, or reliability of any third-party content or links. We do not endorse or guarantee the products, services, or information provided by these third-party websites and resources, and we cannot be held liable for any damages or losses resulting from the use of these websites and resources. </p>  

        <SubHeading>No Guarantee of Outcomes</SubHeading> 

        <h5></h5>  

        <p> Our platform provides job growth opportunities, courses, and skill placement services, but we do not guarantee any specific outcomes or results. Our disclaimer states that the results of using our services may vary based on a variety of factors, including but not limited to individual skills, experience, and other external factors beyond our control. We cannot be held responsible for any damages or losses resulting from the use of our services. </p> 

        <SubHeading>No Legal or Professional Advice</SubHeading> 

         <h5></h5> 

          <p> The information provided on our platform is not intended to provide legal or professional advice. Our disclaimer states that we are not responsible for any damages or losses resulting from the use of our platform as a substitute for legal or professional advice. Users should always seek the advice of a qualified professional before making any decisions based on the information provided on our platform. </p> <p> At Salaryfy, we believe in providing our users with accurate and reliable information about job growth opportunities, courses, and skill placement services. However, we understand that there may be limitations to the information we provide, and we have a disclaimer to ensure that our users understand these limitations. We strive to minimize any legal liability on our part while still providing the best possible services to our users. By using our platform, our users acknowledge and accept our disclaimer, and we encourage them to seek the advice of a qualified professional before making any decisions based on the information provided on our platform. </p>  

        </HeadingAndInfo> 

         </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Limitation of Liability"> 

        <h3></h3> 

        <p> At Salaryfy, we strive to provide accurate and reliable information to our users about job growth opportunities, courses, and skill placement services. However, we understand that there may be limitations to the accuracy and completeness of the information we provide. Therefore, we have a limitation of liability policy to ensure that our users understand the extent of our legal responsibility in case of any damages or losses that may arise from the use of our platform. </p>  

        <SubHeading>Scope of Liability</SubHeading> 

        <h5></h5>  

        <p> Our limitation of liability policy states that we will not be liable for any direct, indirect, incidental, special, or consequential damages or losses that may arise from the use of our platform, including but not limited to damages or losses resulting from inaccurate or incomplete information, errors, omissions, or any other cause. We do not guarantee the accuracy, completeness, or reliability of the information we provide, and we cannot be held responsible for any decisions made based on this information. </p>  

        <SubHeading>Indemnification</SubHeading> 

        <h3></h3> 

        <p> Our limitation of liability policy also includes an indemnification clause. This means that our users agree to indemnify and hold us harmless from any claims, damages, or losses that may arise from their use of our platform, including but not limited to claims arising from their violation of our terms of service or any applicable laws or regulations. </p> 

        <SubHeading>Exceptions</SubHeading> 

        <h5></h5>  

        <p> Our limitation of liability policy does not apply in cases of gross negligence, willful misconduct, or intentional harm. In such cases, we will be liable to the extent permitted by law. </p>  

        <SubHeading>Jurisdiction and Governing Law</SubHeading> 

        <h5></h5>  

        <p> Our limitation of liability policy states that any legal action or proceeding arising from the use of our platform will be governed by the laws of the jurisdiction in which we are incorporated. This means that any disputes that may arise between us and our users will be resolved in accordance with the laws of the country where our company is registered. </p> 

        <SubHeading>Modifications</SubHeading>  

        <h5></h5>  

        <p> We reserve the right to modify our limitation of liability policy at any time, without notice. Any changes to our policy will be effective immediately upon posting on our website. It is the responsibility of our users to review our policy regularly and to be aware of any changes we make. </p> <p> We strive to minimize our legal liability while still providing the best possible services to our users. By using our platform, our users acknowledge and accept our limitation of liability policy, and we encourage them to review our policy regularly to be aware of any changes we make. </p>   

        </HeadingAndInfo> 

        </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Indemnity"> 

        <h3></h3> 

        <p> Our indemnity policy states that our users agree to indemnify and hold us harmless from any claims, damages, or losses that may arise from their use of our platform. This includes any claims arising from their violation of our terms of service or any applicable laws or regulations. By agreeing to our indemnity policy, our users are taking responsibility for their actions and ensuring that we are not held liable for any damages or losses that may result from their use of our platform. </p>  

        <SubHeading>Scope of Indemnification</SubHeading> 

        <h5></h5>  

        <p> Our indemnity policy covers any claims, damages, or losses that may arise from the use of our platform, including but not limited to claims of defamation, copyright infringement, or breach of contract. This means that our users are responsible for any legal claims that may arise from their use of our platform, even if those claims are not directly related to their actions on our platform. </p>  

        <SubHeading>Exceptions</SubHeading> 

        <h5></h5>  

        <p> There are some exceptions to our indemnity policy. We will not hold our users responsible for claims, damages, or losses that arise from our own negligence or willful misconduct. Additionally, our indemnity policy does not apply to any claims, damages, or losses that are covered by our limitation of liability policy. </p>  

        <SubHeading>Notification</SubHeading> 

        <h5></h5>  

        <p> Our indemnity policy requires our users to notify us immediately of any claims, damages, or losses that may arise from their use of our platform. This notification should include all relevant details about the claim, including any documents or evidence that may support the claim. Failure to notify us of any claims, damages, or losses may result in our users being held responsible for any resulting damages or losses. </p>  

        <SubHeading>Defense</SubHeading> 

        <h5></h5>  

        <p> Our indemnity policy also requires our users to defend us against any claims, damages, or losses that may arise from their use of our platform. This means that our users are responsible for hiring an attorney and providing us with a legal defense in any legal proceedings that may arise from their use of our platform. </p>  

        <SubHeading>Settlement</SubHeading> 

        <h5></h5>  

        <p> Our indemnity policy allows us to settle any claims, damages, or losses that may arise from our users' use of our platform. This settlement may include payment of damages or other remedies that are deemed necessary to resolve the claim. Our users agree to cooperate with us in any settlement negotiations and to abide by the terms of any settlement that is reached. </p> <p> At Salaryfy, we understand the importance of providing accurate and reliable information to our users about job growth opportunities, courses, and skill placement services. We also understand the importance of protecting ourselves from any legal claims that may arise from the use of our platform. Our indemnity policy allows us to do both by ensuring that our users take responsibility for their actions and by providing us with legal protection in case of any claims, damages, or losses. We encourage our users to review our indemnity policy carefully and to contact us with any questions or concerns they may have. </p>  

        </HeadingAndInfo>  

        </TermsBlock> 

        <TermsBlock> 

       <HeadingAndInfo heading="Termination of Rights"> 

        <h3></h3> 

        <p> While we strive to maintain a positive and collaborative environment on our platform, we reserve the right to terminate the rights of any user who violates our terms of service or engages in behavior that is harmful to our community. </p> <p> Grounds for Termination We may terminate the rights of a user for a variety of reasons, including but not limited to: </p> <ol className="ml-5"> <li> Violation of our terms of service: Our users must comply with our terms of service, which include guidelines for appropriate behavior on our platform. Any user who violates these terms may have their rights terminated. </li> <li> Harassment or abuse: We have a zero-tolerance policy for harassment or abuse on our platform. Any user who engages in such behavior may have their rights terminated. </li> <li> Misrepresentation or fraud: Our users must provide accurate and truthful information when using our platform. Any user who engages in misrepresentation or fraud may have their rights terminated. </li> <li> Non-payment: Our users are required to pay for any services they use on our platform. Failure to pay may result in termination of their rights. </li> <li> Illegal activity: Our platform may not be used for any illegal activity. Any user who engages in such activity may have their rights terminated. </li> <li> Notification: If we decide to terminate the rights of a user, we will notify them of our decision in writing. This notification will include the grounds for termination and the effective date of termination. We may also provide information about any recourse the user may have, such as the opportunity to appeal our decision. </li> </ol>  

        <SubHeading>Effect of Termination</SubHeading> 

        <h5></h5> 

         <p> When a user's rights are terminated, they will no longer have access to our platform or any of our services. Any fees paid by the user will not be refunded. Additionally, any content or data that the user has posted on our platform may be removed. </p>  

         <SubHeading>Appeal</SubHeading> 

         <h5></h5>  

         <p> If a user believes that their rights have been terminated unfairly, they may appeal our decision. The appeal process will be outlined in the notification of termination that the user receives. The user will be required to provide evidence to support their appeal. </p> 

         <SubHeading>Finality of Decision</SubHeading> 

          <h5></h5>  

          <p> Our decision to terminate the rights of a user is final. We reserve the right to make this decision without explanation or recourse. However, we will make every effort to be fair and consistent in the enforcement of our terms of service. </p> <p> At Salaryfy, we believe that creating a positive and collaborative environment is essential to the success of our platform. We strive to maintain this environment by enforcing our terms of service and by terminating the rights of users who engage in behavior that is harmful to our community. We encourage our users to review our terms of service carefully and to contact us with any questions or concerns they may have. </p>   

        </HeadingAndInfo> 

        </TermsBlock> 

 

      <TermsBlock> 

        <HeadingAndInfo heading="Governing Law"> 

        <h3></h3> 

        <p> 

          At Salaryfy, we believe that complying with the laws and regulations of India is essential to the success of our platform. We strive to provide our users with high-quality services while upholding the highest standards of integrity and compliance. We encourage our users to contact us with any questions or concerns they may have about our governing law policy.In this regard, we are governed by the laws of India, and we take our obligations to comply with these laws very seriously. 

        </p> 

        <SubHeading>Application of Governing Law</SubHeading> 

        <h5></h5> 

        <p> 

          As a company operating in India, we are subject to the laws and 

          regulations of India. Our users who access our platform from India or 

          use our services in India are also subject to these laws and 

          regulations. 

        </p> 

        <SubHeading>Compliance with Laws</SubHeading> 

        <h5></h5> 

        <p> 

          At Salaryfy, we are committed to complying with all applicable laws and 

          regulations, including but not limited to: 

        </p> 

        <li>The Information Technology Act, 2000</li> 

        <li>The Consumer Protection Act, 2019</li> 

        <li>The Companies Act, 2013</li> 

        <li>The Payment and Settlement Systems Act, 2007</li> 

        <li>The Foreign Exchange Management Act, 1999</li> 

        <p> 

          We also comply with all applicable rules and regulations issued by 

          regulatory bodies such as the Reserve Bank of India, the Securities and 

          Exchange Board of India, and the Ministry of Corporate Affairs. 

        </p> 

        <SubHeading>Dispute Resolution</SubHeading> 

        <h5></h5> 

        <p> 

          In the event of a dispute between Salaryfy and a user, we will attempt 

          to resolve the dispute through amicable negotiations. If we are unable 

          to resolve the dispute through negotiation, either party may submit the 

          dispute to arbitration in accordance with the laws of India. The 

          arbitration will be conducted by a single arbitrator appointed by mutual 

          agreement of both parties, or failing such agreement, by the court. The 

          decision of the arbitrator will be final and binding on both parties. 

        </p> 

        <SubHeading>Jurisdiction</SubHeading> 

        <h5></h5> 

        <p> 

          Any legal proceedings arising out of or in connection with the use of 

          Salaryfy's platform or services will be subject to the exclusive 

          jurisdiction of the courts of India. 

        </p> 

        <SubHeading>Modification of Governing Law</SubHeading> 

        <h5></h5> 

        <p> 

          Salaryfy reserves the right to modify this governing law policy at any 

          time in its sole discretion. Any modifications will be effective 

          immediately upon posting on our platform. We encourage our users to 

          review this policy regularly to ensure they are aware of any changes. 

        </p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Binding Arbitration and Class Action Waiver"> 

        <h3></h3> 

        <p> 

          At Salaryfy, we believe that the binding arbitration and class action waiver policy provides an efficient and fair means of resolving any disputes that may arise between our users and us. We encourage our users to contact us with any questions or concerns they may have about this policy. To ensure that any disputes between our users and us are resolved in an efficient and fair manner, we have implemented a binding arbitration and class action waiver policy. 

        </p> 

        <SubHeading>Binding Arbitration</SubHeading> 

        <h5></h5> 

        <p> 

          If a user has a dispute with Salaryfy, we encourage them to contact us to attempt to resolve the dispute amicably. If we are unable to resolve the dispute in this manner, both parties agree to resolve the dispute through binding arbitration. The arbitration will be conducted by a single arbitrator appointed by mutual agreement of both parties, or failing such agreement, by the court. The arbitrator's decision will be final and binding on both parties. 

        </p> 

        <p> 

          The arbitration will be conducted in accordance with the laws of India and the rules of the Arbitration and Conciliation Act, 1996. The arbitration will take place in a mutually agreed location or in a location determined by the arbitrator. 

        </p> 

        <SubHeading>Class Action Waiver</SubHeading> 

        <h5></h5> 

        <p> 

          Both Salaryfy and our users agree to waive the right to bring any dispute as a class, consolidated, representative, collective, or private attorney general action, or to participate in a class, consolidated, representative, collective, or private attorney general action brought by any other party. Any dispute between Salaryfy and a user must be resolved on an individual basis through binding arbitration. 

        </p> 

        <SubHeading>Exceptions to Binding Arbitration and Class Action Waiver</SubHeading> 

        <h5></h5> 

        <p> 

          The binding arbitration and class action waiver policy does not apply to disputes related to intellectual property or to any claims brought by either party in small claims court. In addition, either party may seek injunctive relief or other equitable remedies from a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of a party's copyrights, trademarks, trade secrets, patents, or other intellectual property rights. 

        </p> 

        <SubHeading>Opting-Out of Binding Arbitration and Class Action Waiver</SubHeading> 

        <h5></h5> 

        <p> 

          Users who do not wish to be bound by the binding arbitration and class action waiver policy may opt-out within 7 days of accepting the terms and conditions of our platform. To opt-out, the user must provide written notice (email) to Salaryfy. If a user opts-out, they are still bound by all other terms and conditions of our platform. 

        </p> 

        </HeadingAndInfo> 

      </TermsBlock> 

 

      <TermsBlock> 

        <HeadingAndInfo heading="Acceptable Use Policy"> 

        <h3></h3> 

        <p> 

          At Salaryfy, we believe that our Acceptable Use Policy helps us maintain a productive and respectful environment for all users. To ensure that all users can benefit from our platform in a responsible and ethical manner, we have implemented an Acceptable Use Policy. This policy outlines the acceptable uses of our platform and the actions that are prohibited. 

        </p> 

        <SubHeading>Prohibited Activities</SubHeading> 

        <h5></h5> 

        <p> 

          Users of our platform must not engage in any of the following prohibited 

          activities: 

        </p> 

        <p> 

          a. Illegal Activities - Users must not engage in any illegal activities, 

          including but not limited to theft, fraud, or copyright infringement. 

        </p> 

        <p> 

          b. Harmful Activities - Users must not engage in any activities that may 

          harm the integrity, availability, or security of our platform or other 

          users, including but not limited to hacking, malware, phishing, or 

          spamming. 

        </p> 

        <p> 

          c. Abusive Activities - Users must not engage in any activities that may 

          harass, threaten, or intimidate other users, including but not limited 

          to hate speech, discrimination, or bullying. 

        </p> 

        <p> 

          d. Misleading Activities - Users must not engage in any activities that 

          may mislead or deceive other users, including but not limited to false 

          advertising or impersonation. 

        </p> 

        <SubHeading>Content Restrictions</SubHeading> 

        <h5></h5> 

        <p> 

          Users of our platform must ensure that all content they post or upload 

          to our platform is lawful, accurate, and respectful. Content that 

          violates any applicable laws, infringes on the intellectual property 

          rights of others, or is harmful or offensive in any way is strictly 

          prohibited. 

        </p> 

        <SubHeading>Account Usage</SubHeading> 

        <h5></h5> 

        <p> 

          Users must only use their own account to access our platform and must 

          not share their account with any other person. Users must also maintain 

          the confidentiality and security of their account information, including 

          their login credentials. 

        </p> 

        <SubHeading>Reporting Violations</SubHeading> 

        <h5></h5> 

        <p> 

          If a user becomes aware of any violations of our Acceptable Use Policy, 

          they must report them to Salaryfy immediately. Salaryfy reserves the 

          right to investigate any reported violations and take appropriate 

          action, including but not limited to suspending or terminating the 

          user's account. 

        </p> 

        <SubHeading>Consequences of Violations</SubHeading> 

        <h5></h5> 

        <p> 

          Violations of our Acceptable Use Policy may result in disciplinary 

          action, including but not limited to warnings, suspensions, or 

          terminations of the user's account. In addition, Salaryfy may take legal 

          action against users who engage in illegal activities or violate any 

          applicable laws or regulations. 

        </p> 

        <SubHeading>Amendments</SubHeading> 

        <h5></h5> 

        <p> 

          Salaryfy reserves the right to amend this Acceptable Use Policy at any 

          time without notice. Users are responsible for regularly reviewing the 

          policy to ensure compliance with any changes. We encourage our users to 

          contact us with any questions or concerns they may have about this 

          policy. 

        </p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Copyright and Trademark Policy"> 

        <h3></h3> 

        <p>At Salaryfy, we are committed to respecting the intellectual property rights of others and complying with all applicable copyright and trademark laws. We expect our users to do the same and have therefore implemented a Copyright and Trademark Policy.</p> 

        <SubHeading>Copyright Policy</SubHeading> 

        <h5></h5> 

        <p>a. Ownership - Salaryfy respects the intellectual property rights of others and expects our users to do the same. All content on our platform, including but not limited to text, graphics, images, and software, is owned by Salaryfy or our licensors and is protected by copyright laws.</p> 

        <p>b. Use of Content - Users may use the content on our platform for personal, non-commercial use only. Users must not copy, reproduce, distribute, or modify any content on our platform without obtaining prior written permission from Salaryfy or the content owner.</p> 

        <p>c. Notice and Takedown - If a user believes that any content on our platform infringes their copyright, they may submit a notice of infringement to Salaryfy's designated copyright agent. Salaryfy will review the notice and take appropriate action, including removing the infringing content and terminating the account of the user who posted it.</p> 

        <SubHeading>Trademark Policy</SubHeading> 

      <h3></h3> 

        <p>a. Ownership - Salaryfy owns all trademarks and service marks associated with our platform and services. Any unauthorized use of our trademarks or service marks is strictly prohibited.</p> 

        <p>b. Use of Marks - Users may use our trademarks or service marks only in accordance with our guidelines and with our prior written permission. Users must not use any confusingly similar marks that may infringe on our intellectual property rights.</p> 

        <p>c. Notice and Takedown - If a user believes that any content on our platform infringes their trademark or service mark, they may submit a notice of infringement to Salaryfy's designated trademark agent. Salaryfy will review the notice and take appropriate action, including removing the infringing content and terminating the account of the user who posted it.</p> 

        <SubHeading>User-Generated Content</SubHeading> 

        <h5></h5> 

        <p>a. Ownership - Users retain ownership of any content they post on our platform. However, by posting content, users grant Salaryfy a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, modify, reproduce, distribute, and display the content in connection with our platform and services.</p> 

        <p>b. Responsibility - Users are responsible for ensuring that any content they post on our platform does not infringe on the intellectual property rights of others.</p> 

        <SubHeading>Counter-Notice</SubHeading> 

     <h3></h3> 

        <p>If a user believes that their content was removed from our platform as a result of an improper notice of infringement, they may submit a counter-notice to Salaryfy's designated agent. Salaryfy will review the counter-notice and may restore the removed content if we determine that the notice of infringement was improper.</p> 

        <p>We take our intellectual property rights seriously and expect our users to do the same. We encourage our users to contact us with any questions or concerns they may have about our Copyright and Trademark Policy.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Miscellaneous Provisions"> 

        <h3></h3> 

        <p>Miscellaneous provisions refer to the legal terms and conditions that do not fall under any specific category but are nonetheless important to mention for the user's understanding. At Salaryfy, we have included the following miscellaneous provisions to ensure that our users have a clear understanding of our platform's terms and conditions:</p> 

        <p>Entire Agreement - These Terms of Use, including all policies and agreements incorporated by reference, constitute the entire agreement between the user and Salaryfy regarding the use of our platform and services. Any other agreements, oral or written, are superseded by these Terms of Use.</p> 

        <p>Severability - If any provision of these Terms of Use is deemed invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will remain in full force and effect.</p> 

        <p> 

          No Waiver - The failure of Salaryfy to enforce any provision of these Terms of Use does not constitute a waiver of that provision or any other provision of these Terms of Use. 

        </p> 

        <p>Assignment - The user may not assign these Terms of Use or any rights or obligations hereunder without the prior written consent of Salaryfy. Salaryfy may assign these Terms of Use or any rights or obligations hereunder without the user's consent.</p> 

        <p>Survival - Any provisions that by their nature should survive termination of these Terms of Use, including but not limited to the Limitation of Liability, Indemnification, and Governing Law provisions, will survive termination.</p> 

 

        <p>Force Majeure - Salaryfy will not be liable for any failure or delay in performance under these Terms of Use if such failure or delay is caused by circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, or government action.</p> 

        <p>Headings - The headings used in these Terms of Use are for convenience only and do not affect the interpretation of these Terms of Use.</p> 

        <p>Modifications - Salaryfy may modify these Terms of Use at any time by posting the modified terms on our platform. The user's continued use of our platform and services after such modifications will constitute their acceptance of the modified terms.</p> 

 

        <p> 

          Contact Information - Users may contact Salaryfy with any questions or concerns regarding these Terms of Use at [insert contact information]. 

        </p> 

        <p>At Salaryfy, we strive to provide our users with a transparent and secure platform for job growth opportunities, courses, and skill placement. By incorporating these miscellaneous provisions into our Terms of Use, we aim to ensure that our users have a complete understanding of our platform's terms and conditions.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Grievance Redressal Policy"> 

        <h3></h3> 

        <p>Our Grievance Redressal Policy is as follows:</p> 

        <p>All grievances must be submitted in writing to our support team at support@salaryfy.com keeping the subject of the mail be: Grievance Redressal. 

          The user must provide detailed information about the grievance, including the nature of the complaint and any relevant supporting documents. Our support team will acknowledge receipt of the complaint within 24-48 working hours and begin investigating the matter. The investigation may involve contacting the user to gather additional information or conducting an internal review of our platform's services. 

        </p> 

        <p>Once the investigation is complete, our support team will provide the user with a resolution to their grievance within 10 business days. The resolution may involve corrective action, compensation, or any other appropriate remedy.</p> 

 

        <p>If the user is not satisfied with the resolution provided by our support team, they may escalate their grievance to our Grievance Redressal Officer. The Grievance Redressal Officer will conduct a further review of the matter and provide a final resolution to the user within 10 business days.</p> 

 

        <p>If the user is still not satisfied with the resolution provided by our Grievance Redressal Officer, they may escalate their grievance to our Management Team. The Management Team will conduct a further review of the matter and provide a final resolution to the user within 10 business days.</p> 

 

        <p>All grievance redressal communications will be conducted in writing and documented for future reference.</p> 

        <p>At Salaryfy, we take our users' feedback and grievances seriously and are committed to providing a fair and transparent grievance redressal mechanism. Our support team, Grievance Redressal Officer, and Management Team work together to ensure that all grievances are addressed in a timely and effective manner. We believe that this approach fosters trust and confidence in our platform and services, and we welcome all feedback and suggestions from our users.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

      <TermsBlock> 

        <HeadingAndInfo heading="Feedback"> 

        <h3></h3> 

        <p>At Salaryfy, we value our users' feedback and encourage them to share their opinions, suggestions, and concerns with us. We believe that user feedback is essential for improving our platform's services and enhancing our users' overall experience.</p> 

        <p>We offer various channels for our users to provide feedback, including email, live chat, and social media platforms. Our support team is available 24/7 to assist our users and address any queries or concerns they may have.</p> 

        <p>We use user feedback to continually improve our platform's services and offerings, including job growth opportunities, courses, and skill placement. We analyze user feedback to identify trends and patterns and develop solutions to improve our services' quality and relevance.</p> 

        <p>We also use user feedback to tailor our platform's services to the specific needs and preferences of our users. For example, if we receive feedback that our users are interested in a particular type of course or job growth opportunity, we will prioritize the development and promotion of such offerings.</p> 

        <p>We welcome all types of user feedback, including positive and negative feedback. Positive feedback helps us identify areas where we are excelling and helps us continue to provide excellent services to our users. Negative feedback helps us identify areas for improvement and provides us with valuable insights into our users' pain points and concerns.</p> 

        <p>At Salaryfy, we take all user feedback seriously and strive to respond promptly and effectively to all feedback received. We aim to provide personalized and meaningful responses to all feedback, demonstrating our commitment to our users and our dedication to improving our platform's services.</p> 

        <p>In addition to actively soliciting user feedback, we also conduct regular user satisfaction surveys to measure our users' overall satisfaction with our platform's services. These surveys provide us with valuable data that we use to identify areas for improvement and develop strategies to enhance our users' experience.</p> 

        </HeadingAndInfo> 

      </TermsBlock> 

    </div> 

  ); 

}; 

 

export default TermOfUse; 