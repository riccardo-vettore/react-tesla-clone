import React from 'react';
import './PageHome.css';
import {TeslaButtonReact, TeslaHomeSectionReact, TeslaNavbarItemReact, TeslaNavbarReact} from 'tesla-components';
import {teslaSections} from './const/tesla-sections';
import {navbarCenterItems} from './const/navbar-center-items';
import {TeslaHomeSection} from './model/tesla-home-section';
import {TeslaButton} from './model/tesla-button';
import {TeslaNavbarItem} from './model/tesla-navbar-item';
import {navbarRightItems} from './const/navbar-right-items';


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
            <TeslaNavbarReact logoHRef="/home">
                <div slot="center">
                    {
                        navbarCenterItems.map(({href, name}: TeslaNavbarItem, idx) => {
                            return (
                                <TeslaNavbarItemReact href={href} key={idx}>
                                    {name}
                                </TeslaNavbarItemReact>
                            )
                        })
                    }
                </div>
                <div slot="right">
                    {
                        navbarRightItems.map(({href, name}: TeslaNavbarItem, idx) => {
                            return (
                                <TeslaNavbarItemReact href={href} key={idx}>
                                    {name}
                                </TeslaNavbarItemReact>
                            )
                        })
                    }
                </div>
            </TeslaNavbarReact>
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