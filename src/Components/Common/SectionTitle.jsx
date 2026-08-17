import parse from 'html-react-parser';

const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
            <h2 className="title tg-element-title">{parse(Title)}</h2>   
        </div>
    );
};

export default SectionTitle;