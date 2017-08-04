
import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './paddle';
import Ball from './Ball';
export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(element);
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;


		this.board = new Board(this.width, this.height);
		this.paddle = new Paddle('256', '5', '20', '10', '10');

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z

		);
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.width - this.boardGap - this.paddleWidth,
			(this.height - this.paddleHeight) / 2,
			KEYS.up,
			KEYS.down
		);
		this.Ball = new Ball(
			8,
			this.width,
			this.height
		);

	}

	render() {
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', '512');
		svg.setAttributeNS(null, 'width', '256');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		// this.paddle.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.Ball.render(svg);
		// this.wallCollision(svg);
	}
}
