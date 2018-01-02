[Uno.Compiler.UxGenerated]
public partial class ActionListPage: Fuse.Controls.Page
{
    readonly Fuse.Navigation.Router router;
    [Uno.Compiler.UxGenerated]
    public partial class Template: Uno.UX.Template
    {
        [Uno.WeakReference] internal readonly ActionListPage __parent;
        [Uno.WeakReference] internal readonly ActionListPage __parentInstance;
        public Template(ActionListPage parent, ActionListPage parentInstance): base(null, false)
        {
            __parent = parent;
            __parentInstance = parentInstance;
        }
        static Template()
        {
        }
        public override object New()
        {
            var __self = new global::Separator();
            return __self;
        }
    }
    [Uno.Compiler.UxGenerated]
    public partial class Template1: Uno.UX.Template
    {
        [Uno.WeakReference] internal readonly ActionListPage __parent;
        [Uno.WeakReference] internal readonly ActionListPage __parentInstance;
        public Template1(ActionListPage parent, ActionListPage parentInstance): base(null, false)
        {
            __parent = parent;
            __parentInstance = parentInstance;
        }
        static Template1()
        {
        }
        public override object New()
        {
            var __self = new global::BtnClick();
            return __self;
        }
    }
    [Uno.Compiler.UxGenerated]
    public partial class Template2: Uno.UX.Template
    {
        [Uno.WeakReference] internal readonly ActionListPage __parent;
        [Uno.WeakReference] internal readonly ActionListPage __parentInstance;
        public Template2(ActionListPage parent, ActionListPage parentInstance): base(null, false)
        {
            __parent = parent;
            __parentInstance = parentInstance;
        }
        static Template2()
        {
        }
        public override object New()
        {
            var __self = new global::Separator();
            return __self;
        }
    }
    [Uno.Compiler.UxGenerated]
    public partial class Template3: Uno.UX.Template
    {
        [Uno.WeakReference] internal readonly ActionListPage __parent;
        [Uno.WeakReference] internal readonly ActionListPage __parentInstance;
        public Template3(ActionListPage parent, ActionListPage parentInstance): base(null, false)
        {
            __parent = parent;
            __parentInstance = parentInstance;
        }
        static Template3()
        {
        }
        public override object New()
        {
            var __self = new global::BtnClick();
            return __self;
        }
    }
    global::Uno.UX.Property<object> temp_Items_inst;
    global::Uno.UX.Property<string> temp1_Value_inst;
    global::Uno.UX.Property<object> temp2_Items_inst;
    global::Uno.UX.NameTable __g_nametable;
    static string[] __g_static_nametable = new string[] {
        "router"
    };
    static ActionListPage()
    {
    }
    [global::Uno.UX.UXConstructor]
    public ActionListPage(
		[global::Uno.UX.UXParameter("router")] Fuse.Navigation.Router router)
    {
        this.router = router;
        InitializeUX();
    }
    void InitializeUX()
    {
        __g_nametable = new global::Uno.UX.NameTable(null, __g_static_nametable);
        var temp = new global::Fuse.Reactive.Each();
        temp_Items_inst = new LOURLI_FuseReactiveEach_Items_Property(temp, __selector0);
        var temp3 = new global::Fuse.Reactive.Data("ActList");
        var temp1 = new global::Fuse.Controls.TextBox();
        temp1_Value_inst = new LOURLI_FuseControlsTextInputControl_Value_Property(temp1, __selector1);
        var temp4 = new global::Fuse.Reactive.Data("ETC_TEXT");
        var temp2 = new global::Fuse.Reactive.Each();
        temp2_Items_inst = new LOURLI_FuseReactiveEach_Items_Property(temp2, __selector0);
        var temp5 = new global::Fuse.Reactive.Data("items_Etc");
        var temp6 = new global::Fuse.Reactive.JavaScript(__g_nametable);
        var temp7 = new global::Fuse.Controls.DockPanel();
        var temp8 = new global::Fuse.Controls.Text();
        var temp9 = new global::Fuse.Controls.ScrollView();
        var temp10 = new global::Fuse.Controls.StackPanel();
        var temp11 = new Template(this, this);
        var temp12 = new Template1(this, this);
        var temp13 = new global::Fuse.Reactive.DataBinding(temp_Items_inst, temp3, Fuse.Reactive.BindingMode.Default);
        var temp14 = new global::Separator();
        var temp15 = new global::Fuse.Controls.Text();
        var temp16 = new global::Fuse.Reactive.DataBinding(temp1_Value_inst, temp4, Fuse.Reactive.BindingMode.Default);
        var temp17 = new Template2(this, this);
        var temp18 = new Template3(this, this);
        var temp19 = new global::Fuse.Reactive.DataBinding(temp2_Items_inst, temp5, Fuse.Reactive.BindingMode.Default);
        var temp20 = new global::Separator();
        temp6.LineNumber = 3;
        temp6.FileName = "Pages/ActionListPage.ux";
        temp6.File = new global::Uno.UX.BundleFileSource(import("../../../Pages/ActionListPage.js"));
        temp7.Children.Add(temp8);
        temp7.Children.Add(temp9);
        temp8.Value = "Action List";
        temp8.FontSize = 30f;
        temp8.TextAlignment = Fuse.Controls.TextAlignment.Center;
        temp8.Color = Fuse.Drawing.Colors.White;
        temp8.Margin = float4(0f, 50f, 0f, 50f);
        global::Fuse.Controls.DockPanel.SetDock(temp8, Fuse.Layouts.Dock.Top);
        temp9.Children.Add(temp10);
        temp10.Children.Add(temp);
        temp10.Children.Add(temp14);
        temp10.Children.Add(temp15);
        temp10.Children.Add(temp1);
        temp10.Children.Add(temp2);
        temp10.Children.Add(temp20);
        temp.Templates.Add(temp11);
        temp.Templates.Add(temp12);
        temp.Bindings.Add(temp13);
        temp15.Value = "ETC";
        temp15.FontSize = 25f;
        temp15.Margin = float4(10f, 10f, 10f, 10f);
        temp1.Width = new Uno.UX.Size(300f, Uno.UX.Unit.Unspecified);
        temp1.Margin = float4(50f, 0f, 50f, 4f);
        temp1.Padding = float4(20f, 7f, 20f, 7f);
        temp1.Bindings.Add(temp16);
        temp2.Templates.Add(temp17);
        temp2.Templates.Add(temp18);
        temp2.Bindings.Add(temp19);
        __g_nametable.This = this;
        __g_nametable.Objects.Add(router);
        this.Children.Add(temp6);
        this.Children.Add(temp7);
    }
    static global::Uno.UX.Selector __selector0 = "Items";
    static global::Uno.UX.Selector __selector1 = "Value";
}
