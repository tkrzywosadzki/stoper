import styles from './ConvertTime.module.scss';

const ConvertTime = ({ time }) => {

    const pad = num => {
        //const padNumber = String(num).slice(-2);

        
        return num.toString().padStart(2,'0');
    }
    const msTime = (milliseconds) => {
        
        let ss = Math.floor(milliseconds / 1000);
        milliseconds = milliseconds % 1000;
        let mm = Math.floor(ss / 60);
        ss = ss % 60;
        let hh = Math.floor(mm / 60);
        mm = mm % 60;
      


        return ` ${pad(hh)}:${pad(mm)}:${pad(ss)}.${pad(milliseconds)/10} `
    };

    return (
        <div className={styles.ConvertTime}>
            {msTime(time)}
        </div>
    );
    
};

export default ConvertTime;