﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.8888
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Настройки.
    /// </summary>
    // *** Start programmer edit section *** (Настройки CustomAttributes)

    // *** End programmer edit section *** (Настройки CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НастройкиE", new string[] {
            "ТипНастроек as \'Тип настроек\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Описаний as \'Описаний\'"})]
    public class Настройки : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.8888.ТипНастр fТипНастроек;
        
        private System.DateTime fДатаОкончания;
        
        private System.DateTime fДатаНачала;
        
        private string fОписаний;
        
        private IIS.8888.Сервер fСервер;
        
        // *** Start programmer edit section *** (Настройки CustomMembers)

        // *** End programmer edit section *** (Настройки CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (Настройки.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.ДатаНачала Get start)

                // *** End programmer edit section *** (Настройки.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (Настройки.ДатаНачала Get end)

                // *** End programmer edit section *** (Настройки.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.ДатаНачала Set start)

                // *** End programmer edit section *** (Настройки.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (Настройки.ДатаНачала Set end)

                // *** End programmer edit section *** (Настройки.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (Настройки.ДатаОкончания CustomAttributes)
        public virtual System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Get start)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Get start)
                System.DateTime result = this.fДатаОкончания;
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Get end)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Set start)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Set start)
                this.fДатаОкончания = value;
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Set end)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// Описаний.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.Описаний CustomAttributes)

        // *** End programmer edit section *** (Настройки.Описаний CustomAttributes)
        [StrLen(255)]
        public virtual string Описаний
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.Описаний Get start)

                // *** End programmer edit section *** (Настройки.Описаний Get start)
                string result = this.fОписаний;
                // *** Start programmer edit section *** (Настройки.Описаний Get end)

                // *** End programmer edit section *** (Настройки.Описаний Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.Описаний Set start)

                // *** End programmer edit section *** (Настройки.Описаний Set start)
                this.fОписаний = value;
                // *** Start programmer edit section *** (Настройки.Описаний Set end)

                // *** End programmer edit section *** (Настройки.Описаний Set end)
            }
        }
        
        /// <summary>
        /// ТипНастроек.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.ТипНастроек CustomAttributes)

        // *** End programmer edit section *** (Настройки.ТипНастроек CustomAttributes)
        public virtual IIS.8888.ТипНастр ТипНастроек
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.ТипНастроек Get start)

                // *** End programmer edit section *** (Настройки.ТипНастроек Get start)
                IIS.8888.ТипНастр result = this.fТипНастроек;
                // *** Start programmer edit section *** (Настройки.ТипНастроек Get end)

                // *** End programmer edit section *** (Настройки.ТипНастроек Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.ТипНастроек Set start)

                // *** End programmer edit section *** (Настройки.ТипНастроек Set start)
                this.fТипНастроек = value;
                // *** Start programmer edit section *** (Настройки.ТипНастроек Set end)

                // *** End programmer edit section *** (Настройки.ТипНастроек Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.8888.Сервер.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.Сервер CustomAttributes)

        // *** End programmer edit section *** (Настройки.Сервер CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Сервер"})]
        public virtual IIS.8888.Сервер Сервер
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.Сервер Get start)

                // *** End programmer edit section *** (Настройки.Сервер Get start)
                IIS.8888.Сервер result = this.fСервер;
                // *** Start programmer edit section *** (Настройки.Сервер Get end)

                // *** End programmer edit section *** (Настройки.Сервер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.Сервер Set start)

                // *** End programmer edit section *** (Настройки.Сервер Set start)
                this.fСервер = value;
                // *** Start programmer edit section *** (Настройки.Сервер Set end)

                // *** End programmer edit section *** (Настройки.Сервер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НастройкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройкиE", typeof(IIS.8888.Настройки));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Настройки.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfНастройки CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfНастройки CustomAttributes)
    public class DetailArrayOfНастройки : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.8888.DetailArrayOfНастройки members)

        // *** End programmer edit section *** (IIS.8888.DetailArrayOfНастройки members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Настройки by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Настройки.
        /// </summary>
        public DetailArrayOfНастройки(IIS.8888.Сервер fСервер) : 
                base(typeof(Настройки), ((ICSSoft.STORMNET.DataObject)(fСервер)))
        {
        }
        
        public IIS.8888.Настройки this[int index]
        {
            get
            {
                return ((IIS.8888.Настройки)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.8888.Настройки dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
