import stylex from '@stylexjs/stylex';

const s = stylex.create({
    text: {
        fontSize: "20px",
    }
})

export default function Card(){
    return <div {...stylex.props(s.text)}>Hello World!</div>
}