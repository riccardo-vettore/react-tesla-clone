import React from 'react';
import {teslaSections} from './const/tesla-sections';
import {TeslaHomeSection} from './model/tesla-home-section';
import {TeslaButtonReact, TeslaHomeSectionReact} from 'tesla-components';
import {TeslaButton} from './model/tesla-button';

const PageHome: React.FC = () => {
    function downArrowClick(): void {
        let pageHeight = window.innerHeight;
        window.scrollBy({top: pageHeight, left: 0, behavior: 'smooth'})
    }

    function navigate(path: string): void {
        window.location.href = path;
    }

    return (
        <>
            {
                teslaSections.map((section: TeslaHomeSection, index) => {
                    return (
                        <TeslaHomeSectionReact
                            modelName={section.title}
                            showSubTitle={section.showSubTitle}
                            subTitle={section.subTitle}
                            subTitleHRef={section.subTitleHRef}
                            disclaimer={section.disclaimer}
                            showDownArrow={section.showDownArrow}
                            backgroundImgUrl={section.backgroundImgUrl}
                            onDownArrowClick={downArrowClick}
                            key={index}
                        >
                            {
                                section.buttons?.map((button: TeslaButton, index) => {
                                    return (
                                        <TeslaButtonReact
                                            key={index}
                                            variant={button.variant}
                                            onClick={() => navigate(button.path)}
                                        >
                                            {button.label}
                                        </TeslaButtonReact>
                                    )
                                })
                            }
                        </TeslaHomeSectionReact>
                    )
                })
            }
        </>
    )
}

export default PageHome;