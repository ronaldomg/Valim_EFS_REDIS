/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:58.50
*/
gx.evt.autoSkip = false;
gx.define('hconsultalog', false, function () {
   this.ServerClass =  "hconsultalog" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV63TipoConsulta=gx.fn.getControlValue("vTIPOCONSULTA") ;
      this.AV105DescricaoTela=gx.fn.getControlValue("vDESCRICAOTELA") ;
   };
   this.s132_client=function()
   {
      this.AV94SnErro =  "N"  ;
      if ( ! (new gx.date.gxdate("").compare(this.AV18DataIni)==0) )
      {
         if ( ! (new gx.date.gxdate("").compare(this.AV19DataFin)==0) )
         {
            if ( new gx.date.gxdate( this.AV18DataIni ).compare( this.AV19DataFin ) > 0 )
            {
               this.addMessage("Data Inicial deve ser menor que Data Final");
               this.AV94SnErro =  "S"  ;
               gx.fn.usrSetFocus("vDATAFIN") ;
            }
         }
         else
         {
            this.AV19DataFin =  this.AV18DataIni  ;
         }
      }
      else
      {
         if ( ! (new gx.date.gxdate("").compare(this.AV19DataFin)==0) )
         {
            this.AV18DataIni =  this.AV19DataFin  ;
         }
         else
         {
            this.addMessage("Data Inicial deve ser menor que Data Final");
            this.AV94SnErro =  "S"  ;
            gx.fn.usrSetFocus("vDATAFIN") ;
         }
      }
   };
   this.e19a12_client=function()
   {
      this.executeServerEvent("'CAMPOSALTERADOS'", true, arguments[0], false, false);
   };
   this.e20a12_client=function()
   {
      this.executeServerEvent("'CAMPOSBLOB'", true, arguments[0], false, false);
   };
   this.e11a12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a12_client=function()
   {
      this.executeServerEvent("'MAISFILTROS'", true, null, false, false);
   };
   this.e13a12_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e14a12_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e15a12_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e16a12_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17a12_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e23a12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,55,57,59,61,63,64,65,66,67,68];
   this.GXLastCtrlId =68;
   this.Grid3Container = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"hconsultalog",[],false,1,false,true,0,false,false,false,"CollLogCampos.LogCamposItem",0,"px","Novo registro",true,false,false,null,null,false,"AV98LogCampos",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("GXV10U",30,"CTLOPERACAO","Operação","","Operacao","svchar",0,"px",9,9,"left",null,[],"GXV10U","GXV10U",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV10V",31,"CTLDATAHORA","Data/Hora","","DataHora","dtime",0,"px",19,19,"right",null,[],"GXV10V","GXV10V",true,8,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV10W",32,"CTLUSUARIO","Usuário","","Usuario","svchar",0,"px",31,31,"left",null,[],"GXV10W","GXV10W",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV10X",33,"CTLCONTEUDO1","","","Conteudo1","svchar",0,"px",31,31,"left",null,[],"GXV10X","GXV10X",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV10Y",34,"CTLCONTEUDO2","","","Conteudo2","svchar",0,"px",31,31,"left",null,[],"GXV10Y","GXV10Y",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV10Z",35,"CTLCONTEUDO3","","","Conteudo3","svchar",0,"px",31,31,"left",null,[],"GXV10Z","GXV10Z",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV110",36,"CTLCONTEUDO4","","","Conteudo4","svchar",0,"px",31,31,"left",null,[],"GXV110","GXV110",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV111",37,"CTLCONTEUDO5","","","Conteudo5","svchar",0,"px",31,31,"left",null,[],"GXV111","GXV111",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV112",38,"CTLCONTEUDO6","","","Conteudo6","svchar",0,"px",31,31,"left",null,[],"GXV112","GXV112",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV113",39,"CTLCONTEUDO7","","","Conteudo7","svchar",0,"px",31,31,"left",null,[],"GXV113","GXV113",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV114",40,"CTLCONTEUDO8","","","Conteudo8","svchar",0,"px",31,31,"left",null,[],"GXV114","GXV114",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV115",41,"CTLCONTEUDO9","","","Conteudo9","svchar",0,"px",31,31,"left",null,[],"GXV115","GXV115",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV116",42,"CTLCONTEUDO10","","","Conteudo10","svchar",0,"px",31,31,"left",null,[],"GXV116","GXV116",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV117",43,"CTLLOGTABELACHAVE","Chave","","LogTabelaChave","svchar",0,"px",100,80,"left",null,[],"GXV117","GXV117",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV118",44,"CTLLOGTABELAID","Tabela Id","","LogTabelaId","int",0,"px",16,16,"right",null,[],"GXV118","GXV118",false,0,false,false,"Attribute",1,"");
   Grid3Container.addBitmap("&Bmpcamposalt","vBMPCAMPOSALT",45,0,"px",17,"px","e19a12_client","","Campos Alt.","Image","GridColumnImage");
   Grid3Container.addBitmap("&Bmpcamposblob","vBMPCAMPOSBLOB",46,0,"px",17,"px","e20a12_client","","Campos Obs.","Image","GridColumnImage");
   this.setGrid(Grid3Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE11",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV18DataIni",gxold:"OV18DataIni",gxvar:"AV18DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV18DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIN",gxz:"ZV19DataFin",gxold:"OV19DataFin",gxvar:"AV19DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV19DataFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[22]={fld:"IMAGE1",grid:0};
   GXValidFnc[30]={lvl:2,type:"svchar",len:9,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPERACAO",gxz:"ZV112GXV10U",gxold:"OV112GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10U=Value},v2z:function(Value){gx.O.ZV112GXV10U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPERACAO",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10U,0)},c2v:function(){gx.O.GXV10U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPERACAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"dtime",len:10,dec:8,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAHORA",gxz:"ZV113GXV10V",gxold:"OV113GXV10V",gxvar:"GXV10V",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10V=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV113GXV10V=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAHORA",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10V,0)},c2v:function(){gx.O.GXV10V=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAHORA",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLUSUARIO",gxz:"ZV114GXV10W",gxold:"OV114GXV10W",gxvar:"GXV10W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10W=Value},v2z:function(Value){gx.O.ZV114GXV10W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUSUARIO",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10W,0)},c2v:function(){gx.O.GXV10W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUSUARIO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO1",gxz:"ZV115GXV10X",gxold:"OV115GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10X=Value},v2z:function(Value){gx.O.ZV115GXV10X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO1",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10X,0)},c2v:function(){gx.O.GXV10X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO1",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO2",gxz:"ZV116GXV10Y",gxold:"OV116GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Y=Value},v2z:function(Value){gx.O.ZV116GXV10Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO2",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10Y,0)},c2v:function(){gx.O.GXV10Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO2",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO3",gxz:"ZV117GXV10Z",gxold:"OV117GXV10Z",gxvar:"GXV10Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Z=Value},v2z:function(Value){gx.O.ZV117GXV10Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO3",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10Z,0)},c2v:function(){gx.O.GXV10Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO3",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO4",gxz:"ZV118GXV110",gxold:"OV118GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV110=Value},v2z:function(Value){gx.O.ZV118GXV110=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO4",row || gx.fn.currentGridRowImpl(29),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO4",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO5",gxz:"ZV119GXV111",gxold:"OV119GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV111=Value},v2z:function(Value){gx.O.ZV119GXV111=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO5",row || gx.fn.currentGridRowImpl(29),gx.O.GXV111,0)},c2v:function(){gx.O.GXV111=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO5",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO6",gxz:"ZV120GXV112",gxold:"OV120GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV112=Value},v2z:function(Value){gx.O.ZV120GXV112=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO6",row || gx.fn.currentGridRowImpl(29),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO6",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO7",gxz:"ZV121GXV113",gxold:"OV121GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV113=Value},v2z:function(Value){gx.O.ZV121GXV113=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO7",row || gx.fn.currentGridRowImpl(29),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO7",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO8",gxz:"ZV122GXV114",gxold:"OV122GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV114=Value},v2z:function(Value){gx.O.ZV122GXV114=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO8",row || gx.fn.currentGridRowImpl(29),gx.O.GXV114,0)},c2v:function(){gx.O.GXV114=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO8",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO9",gxz:"ZV123GXV115",gxold:"OV123GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV115=Value},v2z:function(Value){gx.O.ZV123GXV115=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO9",row || gx.fn.currentGridRowImpl(29),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO9",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTEUDO10",gxz:"ZV124GXV116",gxold:"OV124GXV116",gxvar:"GXV116",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV116=Value},v2z:function(Value){gx.O.ZV124GXV116=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTEUDO10",row || gx.fn.currentGridRowImpl(29),gx.O.GXV116,0)},c2v:function(){gx.O.GXV116=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTEUDO10",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELACHAVE",gxz:"ZV125GXV117",gxold:"OV125GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV117=Value},v2z:function(Value){gx.O.ZV125GXV117=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELACHAVE",row || gx.fn.currentGridRowImpl(29),gx.O.GXV117,0)},c2v:function(){gx.O.GXV117=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOGTABELACHAVE",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:16,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZ9",ro:0,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELAID",gxz:"ZV126GXV118",gxold:"OV126GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV118=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV126GXV118=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELAID",row || gx.fn.currentGridRowImpl(29),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLLOGTABELAID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAMPOSALT",gxz:"ZV11bmpCamposAlt",gxold:"OV11bmpCamposAlt",gxvar:"AV11bmpCamposAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11bmpCamposAlt=Value},v2z:function(Value){gx.O.ZV11bmpCamposAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAMPOSALT",row || gx.fn.currentGridRowImpl(29),gx.O.AV11bmpCamposAlt,gx.O.AV129Bmpcamposalt_GXI)},c2v:function(){gx.O.AV129Bmpcamposalt_GXI=this.val_GXI();gx.O.AV11bmpCamposAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAMPOSALT",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAMPOSALT_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV129Bmpcamposalt_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAMPOSBLOB",gxz:"ZV12bmpCamposBlob",gxold:"OV12bmpCamposBlob",gxvar:"AV12bmpCamposBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV12bmpCamposBlob=Value},v2z:function(Value){gx.O.ZV12bmpCamposBlob=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAMPOSBLOB",row || gx.fn.currentGridRowImpl(29),gx.O.AV12bmpCamposBlob,gx.O.AV130Bmpcamposblob_GXI)},c2v:function(){gx.O.AV130Bmpcamposblob_GXI=this.val_GXI();gx.O.AV12bmpCamposBlob=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAMPOSBLOB",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAMPOSBLOB_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV130Bmpcamposblob_GXI',nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE2",grid:0};
   GXValidFnc[55]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[57]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[59]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[61]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[63]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV106Pagina",gxold:"OV106Pagina",gxvar:"AV106Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV106Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV106Pagina,0)},c2v:function(){gx.O.AV106Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV107PaginaAux",gxold:"OV107PaginaAux",gxvar:"AV107PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV107PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV107PaginaAux,0)},c2v:function(){gx.O.AV107PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"JS", format:2,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMETABELA",gxz:"ZV13NomeTabela",gxold:"OV13NomeTabela",gxvar:"AV13NomeTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13NomeTabela=Value},v2z:function(Value){gx.O.ZV13NomeTabela=Value},v2c:function(){gx.fn.setControlValue("vNOMETABELA",gx.O.AV13NomeTabela,0)},c2v:function(){gx.O.AV13NomeTabela=this.val()},val:function(){return gx.fn.getControlValue("vNOMETABELA")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMETABELAPARM",gxz:"ZV108NomeTabelaParm",gxold:"OV108NomeTabelaParm",gxvar:"AV108NomeTabelaParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108NomeTabelaParm=Value},v2z:function(Value){gx.O.ZV108NomeTabelaParm=Value},v2c:function(){gx.fn.setControlValue("vNOMETABELAPARM",gx.O.AV108NomeTabelaParm,0)},c2v:function(){gx.O.AV108NomeTabelaParm=this.val()},val:function(){return gx.fn.getControlValue("vNOMETABELAPARM")},nac:gx.falseFn};
   this.AV18DataIni = gx.date.nullDate() ;
   this.ZV18DataIni = gx.date.nullDate() ;
   this.OV18DataIni = gx.date.nullDate() ;
   this.AV19DataFin = gx.date.nullDate() ;
   this.ZV19DataFin = gx.date.nullDate() ;
   this.OV19DataFin = gx.date.nullDate() ;
   this.ZV112GXV10U = "" ;
   this.OV112GXV10U = "" ;
   this.ZV113GXV10V = gx.date.nullDate() ;
   this.OV113GXV10V = gx.date.nullDate() ;
   this.ZV114GXV10W = "" ;
   this.OV114GXV10W = "" ;
   this.ZV115GXV10X = "" ;
   this.OV115GXV10X = "" ;
   this.ZV116GXV10Y = "" ;
   this.OV116GXV10Y = "" ;
   this.ZV117GXV10Z = "" ;
   this.OV117GXV10Z = "" ;
   this.ZV118GXV110 = "" ;
   this.OV118GXV110 = "" ;
   this.ZV119GXV111 = "" ;
   this.OV119GXV111 = "" ;
   this.ZV120GXV112 = "" ;
   this.OV120GXV112 = "" ;
   this.ZV121GXV113 = "" ;
   this.OV121GXV113 = "" ;
   this.ZV122GXV114 = "" ;
   this.OV122GXV114 = "" ;
   this.ZV123GXV115 = "" ;
   this.OV123GXV115 = "" ;
   this.ZV124GXV116 = "" ;
   this.OV124GXV116 = "" ;
   this.ZV125GXV117 = "" ;
   this.OV125GXV117 = "" ;
   this.ZV126GXV118 = 0 ;
   this.OV126GXV118 = 0 ;
   this.ZV11bmpCamposAlt = "" ;
   this.OV11bmpCamposAlt = "" ;
   this.ZV12bmpCamposBlob = "" ;
   this.OV12bmpCamposBlob = "" ;
   this.AV106Pagina = 0 ;
   this.ZV106Pagina = 0 ;
   this.OV106Pagina = 0 ;
   this.AV107PaginaAux = 0 ;
   this.ZV107PaginaAux = 0 ;
   this.OV107PaginaAux = 0 ;
   this.AV13NomeTabela = "" ;
   this.ZV13NomeTabela = "" ;
   this.OV13NomeTabela = "" ;
   this.AV108NomeTabelaParm = "" ;
   this.ZV108NomeTabelaParm = "" ;
   this.OV108NomeTabelaParm = "" ;
   this.AV18DataIni = gx.date.nullDate() ;
   this.AV19DataFin = gx.date.nullDate() ;
   this.AV106Pagina = 0 ;
   this.AV107PaginaAux = 0 ;
   this.AV13NomeTabela = "" ;
   this.AV108NomeTabelaParm = "" ;
   this.AV63TipoConsulta = "" ;
   this.AV105DescricaoTela = "" ;
   this.GXV10U = "" ;
   this.GXV10V = gx.date.nullDate() ;
   this.GXV10W = "" ;
   this.GXV10X = "" ;
   this.GXV10Y = "" ;
   this.GXV10Z = "" ;
   this.GXV110 = "" ;
   this.GXV111 = "" ;
   this.GXV112 = "" ;
   this.GXV113 = "" ;
   this.GXV114 = "" ;
   this.GXV115 = "" ;
   this.GXV116 = "" ;
   this.GXV117 = "" ;
   this.GXV118 = 0 ;
   this.AV11bmpCamposAlt = "" ;
   this.AV12bmpCamposBlob = "" ;
   this.A1614LogTabelaId = 0 ;
   this.A1604LogTabelaOperacao = "" ;
   this.A1605LogTabelaDataHora = gx.date.nullDate() ;
   this.A1606LogTabelaUsuario = "" ;
   this.A1607LogTabelaChave = "" ;
   this.A1603LogTabelaNome = "" ;
   this.A1609LogTabelaValorNovo = "" ;
   this.A1608LogTabelaValorAntigo = "" ;
   this.A1615LogTabelaCampo = "" ;
   this.AV94SnErro = "" ;
   this.Events = {"e19a12_client": ["'CAMPOSALTERADOS'", true] ,"e20a12_client": ["'CAMPOSBLOB'", true] ,"e11a12_client": ["ENTER", true] ,"e12a12_client": ["'MAISFILTROS'", true] ,"e13a12_client": ["'FECHAR'", true] ,"e14a12_client": ["'PRIMEIRO'", true] ,"e15a12_client": ["'ANTERIOR'", true] ,"e16a12_client": ["'PROXIMO'", true] ,"e17a12_client": ["'ULTIMO'", true] ,"e23a12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29},{av:'subGrid3_Rows'},{av:'AV11bmpCamposAlt',fld:'vBMPCAMPOSALT'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSALT","Tooltiptext")',ctrl:'vBMPCAMPOSALT',prop:'Tooltiptext'},{av:'AV12bmpCamposBlob',fld:'vBMPCAMPOSBLOB'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSBLOB","Tooltiptext")',ctrl:'vBMPCAMPOSBLOB',prop:'Tooltiptext'}],[{av:'AV100Log',fld:'vLOG'},{av:'AV101i',fld:'vI'},{av:'AV102TxtAux',fld:'vTXTAUX'},{av:'AV93split',fld:'vSPLIT'},{ctrl:'CTLCONTEUDO10',prop:'Visible'},{ctrl:'CTLCONTEUDO10',prop:'Title'},{ctrl:'CTLCONTEUDO9',prop:'Visible'},{ctrl:'CTLCONTEUDO9',prop:'Title'},{ctrl:'CTLCONTEUDO8',prop:'Visible'},{ctrl:'CTLCONTEUDO8',prop:'Title'},{ctrl:'CTLCONTEUDO7',prop:'Visible'},{ctrl:'CTLCONTEUDO7',prop:'Title'},{ctrl:'CTLCONTEUDO6',prop:'Visible'},{ctrl:'CTLCONTEUDO6',prop:'Title'},{ctrl:'CTLCONTEUDO5',prop:'Visible'},{ctrl:'CTLCONTEUDO5',prop:'Title'},{ctrl:'CTLCONTEUDO4',prop:'Visible'},{ctrl:'CTLCONTEUDO4',prop:'Title'},{ctrl:'CTLCONTEUDO3',prop:'Visible'},{ctrl:'CTLCONTEUDO3',prop:'Title'},{ctrl:'CTLCONTEUDO2',prop:'Visible'},{ctrl:'CTLCONTEUDO2',prop:'Title'},{ctrl:'CTLCONTEUDO1',prop:'Visible'},{ctrl:'CTLCONTEUDO1',prop:'Title'}]];
   this.EvtParms["'CAMPOSALTERADOS'"] = [[{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29}],[{av:'AV9LogCamposAlterados',fld:'vLOGCAMPOSALTERADOS'}]];
   this.EvtParms["'CAMPOSBLOB'"] = [[{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29}],[{av:'AV20LogCamposBlob',fld:'vLOGCAMPOSBLOB'}]];
   this.EvtParms["ENTER"] = [[{av:'AV94SnErro',fld:'vSNERRO'},{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29},{av:'AV18DataIni',fld:'vDATAINI'},{av:'AV19DataFin',fld:'vDATAFIN'},{av:'AV108NomeTabelaParm',fld:'vNOMETABELAPARM',hsh:true},{av:'A1614LogTabelaId',fld:'LOGTABELAID'},{av:'A1603LogTabelaNome',fld:'LOGTABELANOME'},{av:'AV63TipoConsulta',fld:'vTIPOCONSULTA',hsh:true},{av:'A1607LogTabelaChave',fld:'LOGTABELACHAVE'},{av:'A1606LogTabelaUsuario',fld:'LOGTABELAUSUARIO'},{av:'A1605LogTabelaDataHora',fld:'LOGTABELADATAHORA'},{av:'A1604LogTabelaOperacao',fld:'LOGTABELAOPERACAO'},{av:'A1615LogTabelaCampo',fld:'LOGTABELACAMPO'},{av:'A1608LogTabelaValorAntigo',fld:'LOGTABELAVALORANTIGO'},{av:'A1609LogTabelaValorNovo',fld:'LOGTABELAVALORNOVO'},{av:'AV107PaginaAux',fld:'vPAGINAAUX'},{av:'AV106Pagina',fld:'vPAGINA'},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV11bmpCamposAlt',fld:'vBMPCAMPOSALT'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSALT","Tooltiptext")',ctrl:'vBMPCAMPOSALT',prop:'Tooltiptext'},{av:'AV12bmpCamposBlob',fld:'vBMPCAMPOSBLOB'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSBLOB","Tooltiptext")',ctrl:'vBMPCAMPOSBLOB',prop:'Tooltiptext'}],[{av:'AV107PaginaAux',fld:'vPAGINAAUX'},{av:'AV106Pagina',fld:'vPAGINA'},{av:'AV94SnErro',fld:'vSNERRO'},{av:'AV19DataFin',fld:'vDATAFIN'},{av:'AV18DataIni',fld:'vDATAINI'},{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29},{av:'AV83DataHora',fld:'vDATAHORA'},{av:'AV82DataIniH',fld:'vDATAINIH'},{av:'AV81DataFinH',fld:'vDATAFINH'},{av:'AV64FiltroLogTabela',fld:'vFILTROLOGTABELA'},{av:'AV13NomeTabela',fld:'vNOMETABELA'},{av:'AV89snAlterados',fld:'vSNALTERADOS'},{av:'AV88snExcluidos',fld:'vSNEXCLUIDOS'},{av:'AV91snIncluidos',fld:'vSNINCLUIDOS'},{av:'AV76NomeCampoCombo',fld:'vNOMECAMPOCOMBO'},{av:'AV77ConteudoCampoCombo',fld:'vCONTEUDOCAMPOCOMBO'},{av:'AV65UsuarioId',fld:'vUSUARIOID'},{av:'AV66UsuarioNome',fld:'vUSUARIONOME'},{av:'AV97FiltroLogTabelaLike',fld:'vFILTROLOGTABELALIKE'},{av:'AV80Seleciona',fld:'vSELECIONA'},{av:'AV99LogCamposItem',fld:'vLOGCAMPOSITEM'},{av:'AV93split',fld:'vSPLIT'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'MAISFILTROS'"] = [[{av:'AV108NomeTabelaParm',fld:'vNOMETABELAPARM',hsh:true},{av:'AV63TipoConsulta',fld:'vTIPOCONSULTA',hsh:true}],[{av:'AV108NomeTabelaParm',fld:'vNOMETABELAPARM',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29},{av:'subGrid3_Rows'},{av:'AV11bmpCamposAlt',fld:'vBMPCAMPOSALT'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSALT","Tooltiptext")',ctrl:'vBMPCAMPOSALT',prop:'Tooltiptext'},{av:'AV12bmpCamposBlob',fld:'vBMPCAMPOSBLOB'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSBLOB","Tooltiptext")',ctrl:'vBMPCAMPOSBLOB',prop:'Tooltiptext'},{av:'AV107PaginaAux',fld:'vPAGINAAUX'},{av:'AV106Pagina',fld:'vPAGINA'}],[{av:'AV106Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29},{av:'subGrid3_Rows'},{av:'AV11bmpCamposAlt',fld:'vBMPCAMPOSALT'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSALT","Tooltiptext")',ctrl:'vBMPCAMPOSALT',prop:'Tooltiptext'},{av:'AV12bmpCamposBlob',fld:'vBMPCAMPOSBLOB'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSBLOB","Tooltiptext")',ctrl:'vBMPCAMPOSBLOB',prop:'Tooltiptext'},{av:'AV106Pagina',fld:'vPAGINA'},{av:'AV107PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV106Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29},{av:'subGrid3_Rows'},{av:'AV11bmpCamposAlt',fld:'vBMPCAMPOSALT'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSALT","Tooltiptext")',ctrl:'vBMPCAMPOSALT',prop:'Tooltiptext'},{av:'AV12bmpCamposBlob',fld:'vBMPCAMPOSBLOB'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSBLOB","Tooltiptext")',ctrl:'vBMPCAMPOSBLOB',prop:'Tooltiptext'},{av:'AV106Pagina',fld:'vPAGINA'},{av:'AV107PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV106Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98LogCampos',fld:'vLOGCAMPOS',grid:29},{av:'subGrid3_Rows'},{av:'AV11bmpCamposAlt',fld:'vBMPCAMPOSALT'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSALT","Tooltiptext")',ctrl:'vBMPCAMPOSALT',prop:'Tooltiptext'},{av:'AV12bmpCamposBlob',fld:'vBMPCAMPOSBLOB'},{av:'gx.fn.getCtrlProperty("vBMPCAMPOSBLOB","Tooltiptext")',ctrl:'vBMPCAMPOSBLOB',prop:'Tooltiptext'},{av:'AV107PaginaAux',fld:'vPAGINAAUX'},{av:'AV106Pagina',fld:'vPAGINA'}],[{av:'AV106Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EnterCtrl = ["BTNPESQUISAR"];
   this.setVCMap("AV63TipoConsulta", "vTIPOCONSULTA", 0, "char");
   this.setVCMap("AV105DescricaoTela", "vDESCRICAOTELA", 0, "svchar");
   Grid3Container.addRefreshingVar({rfrVar:"AV11bmpCamposAlt", rfrProp:"Value", gxAttId:"Bmpcamposalt"});
   Grid3Container.addRefreshingVar({rfrVar:"AV11bmpCamposAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpcamposalt"});
   Grid3Container.addRefreshingVar({rfrVar:"AV12bmpCamposBlob", rfrProp:"Value", gxAttId:"Bmpcamposblob"});
   Grid3Container.addRefreshingVar({rfrVar:"AV12bmpCamposBlob", rfrProp:"Tooltiptext", gxAttId:"Bmpcamposblob"});
   this.addGridBCProperty("Logcampos", ["Operacao"], this.GXValidFnc[30], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["DataHora"], this.GXValidFnc[31], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Usuario"], this.GXValidFnc[32], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo1"], this.GXValidFnc[33], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo2"], this.GXValidFnc[34], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo3"], this.GXValidFnc[35], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo4"], this.GXValidFnc[36], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo5"], this.GXValidFnc[37], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo6"], this.GXValidFnc[38], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo7"], this.GXValidFnc[39], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo8"], this.GXValidFnc[40], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo9"], this.GXValidFnc[41], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["Conteudo10"], this.GXValidFnc[42], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["LogTabelaChave"], this.GXValidFnc[43], "AV98LogCampos");
   this.addGridBCProperty("Logcampos", ["LogTabelaId"], this.GXValidFnc[44], "AV98LogCampos");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalog());
