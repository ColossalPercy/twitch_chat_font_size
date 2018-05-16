// *****************************************************************************
// HTML structures/components used by TCFS
// *****************************************************************************
export const buttons = `
	<div class="tw-tooltip-wrapper tw-inline-flex">
		<div id="tcfs-container">
			<button class="tw-button-icon" id="tcfs-increase">
				<span class="tw-button-icon__icon">
					<figure class="tw-svg">
						<svg class="tw-svg__asset tw-svg__asset--inherit" height="16" viewbox="0 0 16 16" width="16">
							<path d="M2,6.999h12v2H2V6.999z M7,1.999h2v12H7V1.999z"></path>
						</svg>
					</figure>
				</span>
			</button>
			<button class="tw-button-icon" id="tcfs-decrease">
				<span class="tw-button-icon__icon">
					<figure class="tw-svg">
						<svg class="tw-svg__asset tw-svg__asset--inherit" height="16" viewbox="0 0 16 16" width="16">
							<path d="M2,6.999h12v2H2V6.999z"></path>
						</svg>
					</figure>
				</span>
			</button>
		</div>
		<div class="tw-tooltip tw-tooltip--up tw-tooltip--align-center" data-a-target="tw-tooltip-label" role="tooltip" id="tcfs-tooltip"></div>
	</div>
`;