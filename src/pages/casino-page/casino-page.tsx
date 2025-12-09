import {useRef, useState, type FC} from "react";
import {useNavigate} from "react-router-dom";

import {CustomPage} from "../../components/custom-page";
import {CustomButton} from "../../components/custom-button";
import {CustomModal} from "../../components/custom-modal";
import type {PageFinishProps} from "../../types";

import styles from "./styles.module.scss";

const SEGMENTS = ["😺", "🐨", "🍀", "🍑", "🐸", "🐋", "🌸", "🐯"];

const WISHES = [
  "Ты найдёшь работу, которая будет тебя вдохновлять, и на которой ты будешь чувствовать себя на своем месте",
  "Ты поедешь в место, о котором давно мечтала.",
  "У тебя будет великолепная возможность взять бомжа (мою собаку, если что) к себе",
  "У тебя появится новое необычное хобби или увлечение.",
  "Ты сделаешь крупную покупку, о которой давно думала.",
  "Ты станешь увереннее в себе, просто потому что перестанешь себя занижать.",
  "Ты станешь спокойнее относиться ко многим вещам — и жизнь станет легче.",
  "Тебя ждёт неожиданный успех. И ты заслуживаешь его, даже если удивишься.",
];

const CX = 100;
const CY = 100;
const RADIUS = 95;

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function polarToCartesian(angleDeg: number, radius: number) {
  const rad = degToRad(angleDeg);
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

export const CasinoPage: FC<PageFinishProps> = ({nextRoute}) => {
  const navigate = useNavigate();

  const [rotation, setRotation] = useState(0);
  const [spins, setSpins] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedWish, setSelectedWish] = useState<string | null>(null);
  const [allWishes, setAllWishes] = useState<string[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const wheelRef = useRef<HTMLDivElement | null>(null);

  const segmentCount = SEGMENTS.length;
  const theta = 360 / segmentCount;

  const handleSpin = () => {
    if (isSpinning || spins >= 3) return;

    if (wheelRef.current) {
      const top = wheelRef.current.getBoundingClientRect().top + window.pageYOffset - 20;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setIsSpinning(true);

    const index = Math.floor(Math.random() * segmentCount);

    // несколько полных оборотов + выравнивание выбранного сектора по нижнему указателю
    const turns = 4 + spins * 2; // каждый раз чуть больше, чтобы было видно вращение
    const finalRotation = turns * 360 - index * theta + 20;

    setRotation(finalRotation);

    setTimeout(() => {
      const wish = WISHES[index];
      if (spins < 2) {
        setSelectedWish(wish);
        setAllWishes((prev) => [...prev, wish]);
        setSpins((prev) => prev + 1);
        setIsSpinning(false);
      }

      if (spins == 2) {
        setSelectedWish("Ты откроешь свой ресторан японской кухни, а главным блюдом будет угорь 💀");
        setAllWishes((prev) => [...prev, "Ты откроешь свой ресторан японской кухни, а главным блюдом будет угорь 💀"]);
        setModalOpen(true)
      }
    }, 4200);
  };

  return (
    <CustomPage title="Твоя награда - колесо предсказаний">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.wheelWrapper} ref={wheelRef}>
              <svg
                className={styles.wheel}
                viewBox="0 0 200 200"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* Сектора */}
                {SEGMENTS.map((symbol, i) => {
                  // хотим, чтобы сектор 0 в покое смотрел ровно вниз (270°)
                  const startAngle = 270 + i * theta;
                  const endAngle = startAngle + theta;
                  const midAngle = (startAngle + endAngle) / 2;

                  const start = polarToCartesian(startAngle, RADIUS);
                  const end = polarToCartesian(endAngle, RADIUS);

                  const largeArcFlag = theta > 180 ? 1 : 0;

                  const d = `
                    M ${CX} ${CY}
                    L ${start.x} ${start.y}
                    A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
                    Z
                  `;

                  const emojiPos = polarToCartesian(midAngle, RADIUS * 0.6);

                  return (
                    <g key={i}>
                      <path
                        d={d}
                        fill={
                          i % 2 === 0
                            ? "rgba(255, 150, 170, 0.35)"
                            : "rgba(255, 150, 170, 0.5)"
                        }
                      />
                      <text
                        x={emojiPos.x}
                        y={emojiPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="20"
                      >
                        {symbol}
                      </text>
                    </g>
                  );
                })}

                {/* центр */}
                <circle cx={CX} cy={CY} r={22} fill="#fff" />
                <text
                  x={CX}
                  y={CY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="20"
                />
              </svg>

              {/* указатель снизу */}
              <div className={styles.pointer} />
            </div>

            <div className={styles.counter}>Осталось {3 - spins} попытки</div>
          </div>

          <div className={styles.right}>
            <div className={styles.description}>
              Рядом находится колесо предсказаний.
              Тебе очень повезло - просто за то, что ты есть, ты заработала целых три вращения колеса.
              Каждое из предсказаний подскажет, что можно ждать в течении года.
              Если готова успытать удачу - нажимай на кнопку, и когда рулетка остановится, сообщение будет внизу.
              Но помни - крути с осторожностью :)
            </div>

            <CustomButton
              title={spins >= 3 ? "Вращений больше нет" : "Испытать удачу"}
              onClick={handleSpin}
              disabled={isSpinning || spins >= 3}
            />

            {selectedWish && (
              <div className={styles.resultBox}>
                Колесо говорит:<br /> "{selectedWish}"
              </div>
            )}
          </div>
        </div>
      </div>

      <CustomModal
        open={isModalOpen}
        onClose={() => {
          navigate(nextRoute);
          setModalOpen(false);
        }}
        svgName="happy-cat.gif"
        title="Итак, твои предсказания на будущий год:"
        message={(
          <div className={styles.finishBox}>
            <ul>
              {allWishes.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
            <div>
              Надеюсь это то, что ты хотела. А даже если нет — ты всё равно сумеешь добиться всего сама!
            </div>
          </div>
        )}
        buttonTitle="К финалу"
      />
    </CustomPage>
  );
}