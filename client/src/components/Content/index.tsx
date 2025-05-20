import { useState } from 'react';
import './content.css'
import type { IParams, IResult } from '../../types';
import { generateQuestion } from '../../utils/util';
import { toast } from 'react-toastify';

const Content = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        experienceLevel: '',
        jobDescription: '',
    });

    const [result, setResult] = useState<IResult[]>([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setResult([])

        const { jobTitle, experienceLevel, jobDescription } = formData;
        let args: IParams = {} as IParams;
        if (jobTitle) args.jobTitle = jobTitle;
        if (experienceLevel) args.experienceLevel = experienceLevel;
        if (jobDescription) args.jobDescription = jobDescription;

        try {
            const data = await generateQuestion(args);
            if (data.status !== 200) {
                toast.error('Something went wrong, please try again later');
                return;
            }
            setLoading(false);
            setResult(data?.data)
        } catch (error) {
            setLoading(false);
            toast.error('Something went wrong, please try again later');
            console.error('Error:', error);
        }

    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setFormData({
            jobTitle: '',
            experienceLevel: '',
            jobDescription: '',
        });
        setResult([]);
    };

    return (
        <>
            <div className='content-container'>
                <div >
                    <form className="form-container" onSubmit={handleSubmit}>

                        <label>
                            Job Title: <span className="required-asterisk">*</span>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle || ""}
                                placeholder="Enter job title"
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Experience Level (Optional):
                            <select
                                name="experienceLevel"
                                value={formData.experienceLevel || ""}
                                onChange={handleChange}
                            >
                                <option value="">Select level</option>
                                <option value="junior">Junior</option>
                                <option value="mid">Mid</option>
                                <option value="senior">Senior</option>
                            </select>
                        </label>

                        {/* <label>
                        Question Type (Optional):
                        <select
                            name="questionType"
                            value={formData.questionType}
                            onChange={handleChange}
                        >
                            <option value="">Select type</option>
                            <option value="technical">Technical</option>
                            <option value="behavioral">Behavioral</option>
                            <option value="situational">Situational</option>
                            <option value="skillBased">Skill-Based</option>
                            <option value="factBased">Fact-Based</option>
                        </select>
                    </label> */}

                        <label>
                            Job Description: <span className="required-asterisk">*</span>
                            <textarea
                                rows={5}
                                cols={30}
                                name="jobDescription"
                                value={formData.jobDescription || ""}
                                placeholder="Enter job description"
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <button type="submit" className='submit-button'>Generate Questions ✨</button>
                        <button type="reset" className='clear-button' onClick={handleClear} disabled={loading ? true : false}>Clear Form</button>
                    </form>
                </div>


                <div className="result">
                    {loading && <div className="loading center">Generating question...</div>}
                    {result.length > 0 && <Result result={result} />}
                    {result.length === 0 && !loading && <div className="no-result center">No results found</div>}
                </div>

            </div>
        </>

    );
}


export default Content;

interface ResultProps {
    result: IResult[];
}

const Result = ({ result }: ResultProps) => {
    return (
        <div className="result-container">
            <h3>Generated Questions</h3>
            {result.map((item, index) => (
                <div key={index} className="result-item">
                    <h4>Question {index + 1}: <span>{item?.difficulty}</span> </h4>
                    <p>{item?.question}</p>
                    <p>Category - {item?.category}</p>
                    <h4>Sample Answer:</h4>
                    <p>&emsp; &emsp;  {item?.answer}</p>
                    <h4>Evaluation Criteria</h4>

                    <ul>
                        <li>
                            &emsp; <span> Answer Highlights: </span> {item?.evaluationCriteria?.answerHighlights?.map((elm, index) => {
                                return (
                                    <ul key={index}>
                                        <li>&emsp;&emsp; {index + 1}) {elm}</li>
                                    </ul>
                                )
                            })}
                        </li>
                        <li>
                            &emsp;<span> Warning Signs:</span> {item?.evaluationCriteria?.warningSigns?.map((elm, index) => {
                                return (
                                    <ul key={index}>
                                        <li>&emsp;&emsp; {index + 1}) {elm}</li>
                                    </ul>
                                )
                            })}
                        </li>
                    </ul>

                    {index === result?.length - 1 ? <></> : <> <br /><hr /> </>}
                </div>
            ))}
        </div>
    )
}

